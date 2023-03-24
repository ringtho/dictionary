import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import SearchBar from "./SearchBar"
import Content from "./Content"
import Error from "./Error"
import getWord from "../api"
import { errorAction} from "../redux/errorReducer"
import {setIdleStatus, setSubmittingStatus} from "../redux/statusReducer"
import { addWordDetails } from "../redux/wordDetailsReducer"
import { addFormData } from "../redux/formDataReducer"

export default function Main() {
    const [keyWord, setKeyWord] = useState("")
    const { error, formData } = useSelector(state => state)
    const dispatch = useDispatch()
    
    function handleOnChange(e){
        setKeyWord(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(addFormData(keyWord))
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