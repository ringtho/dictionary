import React, { useEffect } from "react"
import { getRandomWord } from "../api"


export default function LandingPage(){

    useEffect(()=>{

        async function getWord(){
            const data = await getRandomWord()
            console.log(data)
        }

        getWord()
        
    }, [])


    return (
        <div className="landing-page-container">
            <h2>Welcome to the dictionary App!</h2>
            <p>Type a word in the input above to begin the search!</p>
            <p>You can start your search with the word <span>"amazing"</span> because you 
            are an amazing person for using my app!</p>
        </div>
    )
}