import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import SearchBar from "./SearchBar"
import Content from "./Content"
import Error from "./Error"
import getWord from "../api"

import { errorAction} from "../redux/errorReducer"
import {setIdleStatus, setSubmittingStatus} from "../redux/statusReducer"

export default function Main() {
    const [keyWord, setKeyWord] = useState("")
    const [formData, setFormData] = useState({search: "keyboard"})
    const [wordDetails, setWordDetails] = useState([])

    const { error } = useSelector(state => state)
    const dispatch = useDispatch()
    
    function handleOnChange(e){
        setKeyWord(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setFormData({search : keyWord})
    }

    useEffect(() => {
        dispatch(setSubmittingStatus())
        dispatch(errorAction(null))
        setWordDetails([])

        async function getData(){
            try {
                const data = await getWord(formData.search)
                setWordDetails(data[0])
            } catch(err){
                dispatch(errorAction(err))
            } finally {
                dispatch(setIdleStatus())
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
            />

            { 
                formData && !error ? <Content 
                    wordDetails={wordDetails} 
                />  :
                <Error />
            }

        </>
    )
}