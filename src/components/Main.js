import React, { useState, useEffect } from "react"
import SearchBar from "./SearchBar"
import Content from "./Content"
import Error from "./Error"
import getWord from "../api"

export default function Main() {
    const [keyWord, setKeyWord] = useState("")
    const [formData, setFormData] = useState({search : "keyboard"})
    const [wordDetails, setWordDetails] = useState([])
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)

    function handleOnChange(e){
        setKeyWord(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setFormData({search : keyWord})
    }

    useEffect(() => {
        setStatus("submitting")
        setError(null)
        setWordDetails({search : ""})

        async function getData(){
            try {
                const data = await getWord(formData.search)
                setWordDetails(data[0])
            } catch(err){
                setError(err)
            } finally {
                setStatus("idle")
            }
        } 
        getData()

    },[formData.search])

    console.log(wordDetails)

    return (
        <>
            <SearchBar 
                handleSubmit={handleSubmit} 
                handleOnChange={handleOnChange} 
                keyWord={keyWord} 
                status={status}  
            />

            { 
                !error ? <Content status={status} wordDetails={wordDetails} /> : 
                <Error {...error} />
                
            }
        </>
    )
}