import React, { useState, useEffect } from "react";
import searchIcon from "../assets/images/icon-search.svg"
import playIcon from "../assets/images/icon-play.svg"
import newWindow from "../assets/images/icon-new-window.svg"

import SpeechType from "./SpeechType";

export default function Search() {
    const [keyWord, setKeyWord] = useState("")
    const [formData, setFormData] = useState({search : "keyboard"})
    const [wordDetails, setWordDetails] = useState([])

    function handleOnChange(e){
        setKeyWord(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setFormData({search : keyWord})
    }

    useEffect(() => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${formData.search}`)
            .then(res => res.json())
            .then(data => setWordDetails(data[0]))
    },[formData.search])

    const partOfSpeech = wordDetails.meanings?.map((speech, idx) => {
        return speech.partOfSpeech && <SpeechType key={idx} {...speech} />
    })

    return (
        <>
        <section className="search-bar-container">
        <form onSubmit={handleSubmit}>
          <input type="text" 
            id="search-bar" 
            className="search-bar" 
            placeholder="Search for any word..."
            name="keyWord"
            value={keyWord}
            onChange={handleOnChange} 
            />
          <img src={searchIcon} alt="search-icon" className="search-icon" />
        </form>
        </section>

        <section>
        <div className="keyword-container">
        <div className="word">
            <h1>{wordDetails.word}</h1>
            <p>{wordDetails.phonetic}</p>
        </div>
        <img src={playIcon} alt="play-icon" className="play-icon" />
        </div>
        {partOfSpeech}
        <div className="source-container">
        <p className="source">Source</p>
        <hr className="hr"></hr>
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
        </>
    )
}