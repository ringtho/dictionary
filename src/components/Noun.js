import React from "react";


export default function Noun(props){
    const {definitions, synonyms} = props

    const defintionEls = definitions.map(
        (definition, idx) => {
        return (
            <li key={idx}>{definition.definition}</li>
        )
    })

    return (
        <div className="noun-container">
            <h4 className="noun">noun</h4>
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