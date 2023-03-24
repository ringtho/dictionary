import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import SearchBar from "./SearchBar"
import Content from "./Content"
import Error from "./Error"
import getWord from "../api"

import { errorAction} from "../redux/errorReducer"
import {setIdleStatus, setSubmittingStatus} from "../redux/statusReducer"
import { addWordDetails } from "../redux/wordDetailsReducer"

export default function Main() {
    const [keyWord, setKeyWord] = useState("")
    const [formData, setFormData] = useState({search: "keyboard"})

    const { error, wordDetails } = useSelector(state => state)

    console.log(wordDetails)
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
        dispatch(addWordDetails(null))

        async function getData(){
            try {
                const data = await getWord(formData.search)
                dispatch(addWordDetails(data[0]))
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
                formData && !error ? <Content />:<Error />
            }

        </>
    )
}