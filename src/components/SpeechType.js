import React from "react";


export default function SpeechType(props){
    const {definitions, synonyms, partOfSpeech} = props

    const defintionEls = definitions.map(
        (definition, idx) => {
        return (
            <>
            <li key={idx}>{definition.definition}</li>
            {
                definition.example && 
                <p className="word-example">"{definition.example}"</p>
            }
            </>
        )
    })

    return (
        <div className="noun-container">
            <h4 className="noun">{partOfSpeech}</h4>
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