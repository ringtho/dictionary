import React, { useState, useEffect } from "react"
import SearchBar from "./SearchBar"
import Content from "./Content"
import Error from "./Error"
import getWord from "../api"

import SpeechType from "./SpeechType"
import playIcon from "../assets/images/icon-play.svg"
import playIconHover from "../assets/images/icon-play-hover.svg"
import newWindow from "../assets/images/icon-new-window.svg"

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

    function play() {
        let audio = document.getElementById("audio");
        audio.play();
    }


    const partOfSpeech = wordDetails.meanings?.map((speech, idx) => {
        return speech.partOfSpeech && <SpeechType key={idx} {...speech} />
    })

    const audioArr = wordDetails.phonetics?.filter((audio)=>{
        return audio.audio !== ''
    }) || null

    const audioSrc = audioArr !== null && audioArr.length > 0 
    ? audioArr[0].audio : ''

    console.log(wordDetails)
 
    return (
        <>
            <SearchBar 
                handleSubmit={handleSubmit} 
                handleOnChange={handleOnChange} 
                keyWord={keyWord} 
                status={status}  
            />

            { error ?  <Error {...error} /> : 

            

            <section>
                <div className="keyword-container">
                    <div className="word">
                        <h1>{wordDetails.word}</h1>
                        <p>{wordDetails.phonetic}</p>
                    </div>
                    <div className="img-container">
                        <img src={playIcon} alt="play-icon" className="play-icon" onClick={play} />
                        <img src={playIconHover} alt="play-icon" className="play-icon-hover" onClick={play} />
                    </div>
                    
                    <audio id="audio" src={audioSrc}></audio>
                </div>
                {partOfSpeech}
                <div className="source-container">
                    <p className="source">Source</p>
                    <a id="source-link" className="source-link" 
                        target="_blank"
                        rel="noreferrer" 
                        href={`https://en.wiktionary.org/wiki/${wordDetails.word}`}
                        >https://en.wiktionary.org/wiki/{wordDetails.word}</a>
                    <a href={`https://en.wiktionary.org/wiki/${wordDetails.word}`} target="_blank" rel="noreferrer">
                        <img src={newWindow} alt="" className="new-window" />
                    </a>
                </div>
            </section>
            }
        </>
    )
}