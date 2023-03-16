import React from "react"

export default function Error(props){
    const {title, message, resolution } = props
    return (
        <div className="error-container">
            <span className="error-emoji">😕</span>
            <h2 className="error-title">{title}</h2>
            <p className="error-description">{message} {resolution}</p>
        </div>
    )
}