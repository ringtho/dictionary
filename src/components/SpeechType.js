import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { addFormData } from "../redux/formDataReducer"
import { addKeyWord } from "../redux/keyWordReducer"



export default function SpeechType(props){
    const {definitions, synonyms, partOfSpeech} = props

    const { theme } = useSelector(state => state)
    const dispatch = useDispatch()

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

    function handleSynonymClick(word){
        dispatch(addKeyWord(word))
        dispatch(addFormData(word))
        
    }

    const synonymsEls = synonyms.map((synonym, idx) =>(
        <span className="synonym-span" key={idx}
        onClick={() => handleSynonymClick(synonym)}>{ (idx ? ', ' : '') + synonym }</span>
        )
    )

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
                    <p className="synonym-description">
                        {synonymsEls}
                    </p>
                </div>
            }
        </div>
    )
}