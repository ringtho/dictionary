import React from "react"
import { useSelector } from "react-redux"

export default function Error(){
    const {title, message, resolution }  = useSelector(state => state.error)
    return (
        <div className="error-container">
            <span className="error-emoji">😕</span>
            <h2 className="error-title">{title}</h2>
            <p className="error-description">{message} {resolution}</p>
        </div>
    )
}