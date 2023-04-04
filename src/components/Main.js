import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import SearchBar from "./SearchBar"
import LandingPage from "./LandingPage"
import Content from "./Content"
import Error from "./Error"
import getWord from "../api"
import LandingPage from "./LandingPage"
import { errorAction} from "../redux/errorReducer"
import {setIdleStatus, setSubmittingStatus} from "../redux/statusReducer"
import { addWordDetails } from "../redux/wordDetailsReducer"
import { addKeyWord } from "../redux/keyWordReducer"

export default function Main() {
    const { error, formData } = useSelector(state => state)
    const dispatch = useDispatch()

    
    function handleOnChange(e){
        dispatch(addKeyWord(e.target.value))
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
        

    },[formData.search, dispatch])

    return (
        <>
            <SearchBar 
                handleOnChange={handleOnChange} 
            />

            { 
<<<<<<< HEAD
                formData.search && !error ? <Content />
                : !formData.search ? <LandingPage /> :
                <Error />
=======
                !error ? formData ? <Content />: <LandingPage /> : <Error />
>>>>>>> ea4635b (Updated Readme file)
            }

        </>
    )
}