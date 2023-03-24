import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import SearchBar from "./SearchBar"
import Content from "./Content"
import Error from "./Error"
import getWord from "../api"

import { errorAction} from "../redux/errorReducer"

export default function Main(props) {
    const [keyWord, setKeyWord] = useState("")
    const [formData, setFormData] = useState({search: "keyboard"})
    const [wordDetails, setWordDetails] = useState([])
    const [status, setStatus] = useState("idle")

    const data = useSelector(state => state)
    const dispatch = useDispatch()
    
    const {error} = data

    function handleOnChange(e){
        setKeyWord(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setFormData({search : keyWord})
    }

    useEffect(() => {
        setStatus("submitting")
        dispatch(errorAction(null))
        setWordDetails([])

        async function getData(){
            try {
                const data = await getWord(formData.search)
                setWordDetails(data[0])
            } catch(err){
                dispatch(errorAction(err))
            } finally {
                setStatus("idle")
            }
        } 
        getData()

    },[formData?.search, dispatch])

    return (
        <>
            <SearchBar 
                handleSubmit={handleSubmit} 
                handleOnChange={handleOnChange} 
                keyWord={keyWord} 
                status={status} 
            />

            { 
                formData && !error ? <Content 
                    status={status} 
                    wordDetails={wordDetails} 
                />  :
                <Error {...error} />
            }

        </>
    )
}