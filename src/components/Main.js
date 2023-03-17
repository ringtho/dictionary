import React, { useState, useEffect } from "react"

import playIcon from "../assets/images/icon-play.svg"
import playIconHover from "../assets/images/icon-play-hover.svg"

import newWindow from "../assets/images/icon-new-window.svg"

import SpeechType from "./SpeechType"
import SearchBar from "./SearchBar"
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

    function play() {
        let audio = document.getElementById("audio");
        audio.play();
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

    const partOfSpeech = wordDetails.meanings?.map((speech, idx) => {
        return speech.partOfSpeech && <SpeechType key={idx} {...speech} />
    })

    const audioArr = wordDetails.phonetics?.filter((audio)=>{
        return audio.audio !== ''
    }) || null

    const audioSrc = audioArr !== null && audioArr.length > 0 
    ? audioArr[0].audio : ''
 
    return (
        <>
            <SearchBar 
                handleSubmit={handleSubmit} 
                handleOnChange={handleOnChange} 
                keyWord={keyWord} 
                status={status}  
            />

            {error ?  <Error {...error} /> :
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