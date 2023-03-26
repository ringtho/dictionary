import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import SearchBar from "./SearchBar"
import Content from "./Content"
import Error from "./Error"
import getWord from "../api"
import LandingPage from "./LandingPage"
import { errorAction} from "../redux/errorReducer"
import {setIdleStatus, setSubmittingStatus} from "../redux/statusReducer"
import { addWordDetails } from "../redux/wordDetailsReducer"
import { addFormData } from "../redux/formDataReducer"
import { addKeyWord } from "../redux/keyWordReducer"

export default function Main() {
    const { error, formData, keyWord } = useSelector(state => state)
    const dispatch = useDispatch()
    
    function handleOnChange(e){
        dispatch(addKeyWord(e.target.value))
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
            />

            { 
                formData.search && !error ? <Content />
                : !formData.search ? <LandingPage /> :
                <Error />
            }

        </>
    )
}