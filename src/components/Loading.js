import React from "react"
import { PuffLoader } from "react-spinners"


export default function Loading(){
    return (
        <div className="loader-container">
            <PuffLoader color={'#A445ED'} size={150} />
        </div>
    )
}