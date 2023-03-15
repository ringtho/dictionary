import React, { useState, useEffect } from "react"
import appLogo from "../assets/images/logo.svg"
import moonIcon from "../assets/images/icon-moon.svg"


export default function Header() {
    const [fontFamily, setFontFamily] = useState({font: ""})

    function handleOnChange(e) {
        setFontFamily({font: e.target.value})
    }

    useEffect(() => {
        document.body.style.fontFamily = fontFamily.font
    }, [fontFamily])



    return (
        <header className="app-header">
        <img src={appLogo} alt="logo" className="logo" />
        <div className="app-font-slider">
            <form className="app-font-slider">
                <div className="select-div">
                    <select value={fontFamily.font} onChange={handleOnChange}>
                    <option defaultValue value={`"Inter", sans-serif`} className="sans-serif">Sans Serif</option>
                    <option value={`"Lora", serif`} className="serif">Serif</option>
                    <option value={`'Inconsolata', monospace`} className="mono">Mono</option>
                    </select>
                </div>
                <hr className="hr"></hr>
                <label className="switch">
                    <input type="checkbox"  />
                    <span className="slider round"></span>
                </label>
            </form>
          <img src={moonIcon} alt="moon-icon" className="moon-icon" />
        </div>
      </header>
    )
}