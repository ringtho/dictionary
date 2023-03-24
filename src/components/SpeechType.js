import React from "react"
import { useSelector } from "react-redux"


export default function SpeechType(props){
    const {definitions, synonyms, partOfSpeech} = props

    const { theme } = useSelector(state => state)

    const defintionEls = definitions.map(
        (definition, idx) => {
        return (
            <React.Fragment key={idx}>
            <li>{definition.definition}</li>
            {
                definition.example && 
                <p className="word-example">"{definition.example}"</p>
            }
            </React.Fragment>
        )
    })

    return (
        <div className="noun-container">
            <h4 className={`noun ${theme.darkMode ? "noun-dark" : ""}`}>
                {partOfSpeech}
            </h4>
            <p className="meaning">Meaning</p>
            <ul className="list">
            {defintionEls}
            </ul>
            {
                synonyms.length > 0 && <div className="synonym-container">
                    <p className="synonym">Synonyms</p>
                    <p className="synonym-description">{synonyms.join(", ")}</p>
                </div>
            }
        </div>
    )
}