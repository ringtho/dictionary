import React, { useState, useEffect } from "react";
import searchIcon from "../assets/images/icon-search.svg"
import playIcon from "../assets/images/icon-play.svg"
import newWindow from "../assets/images/icon-new-window.svg"

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

    console.log(wordDetails.meanings)

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
        <div className="noun-container">
            <h4 className="noun">noun</h4>
            <p className="meaning">Meaning</p>
            <ul className="list">
                <li>A set of keys used to operate a typewriter, computer etc.</li>
            </ul>
            <div>
                <span className="synonym">Synonyms</span>
                <span className="synonym-description">electronic keyboard</span>
            </div>
        </div>
        <div className="verb-container">
        <h4 className="verb">verb</h4>
        <p className="meaning">Meaning</p>
        <ul className="list">
            <li>A set of keys used to operate a typewriter, computer etc.</li>
        </ul>
        <p className="word-example">“Keyboarding is the part of this job I hate the most.”</p>
        </div>
        <div className="source-container">
        <p className="source">Source</p>
        <a id="source-link" className="source-link" 
        target="_blank"
        rel="noreferrer" 
        href="https://en.wiktionary.org/wiki/keyboard"
        >https://en.wiktionary.org/wiki/{wordDetails.word}</a>
        <a href="https://en.wiktionary.org/wiki/keyboard" target="_blank" rel="noreferrer">
            <img src={newWindow} alt="" className="new-window" />
        </a>
        </div>
        </section>
        </>
    )
}