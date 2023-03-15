import React, { useState, useEffect } from "react"
import appLogo from "../assets/images/logo.svg"
import moonIcon from "../assets/images/icon-moon.svg"


export default function Header() {

    const colorTheme = JSON.parse(localStorage.getItem("darkMode")) || false
    const fontTheme = localStorage.getItem("font") || ""

    const [theme, setTheme] = useState({
        font: fontTheme, 
        darkMode: colorTheme
    })

    console.log(theme)

    function handleOnChange(e) {
        const {name, value, type, checked} = e.target
        setTheme(prev => (
            {   ...prev, 
                [name]: type === "checkbox" ? checked : value
            }
            
        ))
        
    }

    useEffect(() => {
        console.log(theme)
        localStorage.setItem("darkMode", theme.darkMode)
        localStorage.setItem("font", theme.font)
        if (theme.darkMode){
            document.body.className="dark-theme"
            document.querySelector("#select").classList.add("dark-theme")
            document.querySelector("#search-bar").classList.add("dark-search-bar")
            document.querySelector("#source-link").classList.add("dark-source-link")
            document.querySelector(".moon-icon").classList.add("dark-moon-icon")
        } else {
            document.body.className= "light-theme"
            document.querySelector("#select").classList.remove("dark-theme")
            document.querySelector("#search-bar").classList.remove("dark-search-bar")
            document.querySelector("#source-link").classList.remove("dark-source-link")
            document.querySelector(".moon-icon").classList.remove("dark-moon-icon")
        }

        document.body.style.fontFamily = theme.font
    }, [theme])

    return (
        <header className="app-header">
        <img src={appLogo} alt="logo" className="logo" />
        <div className="app-font-slider">
            <div className="select-div">
                <select id="select" value={theme.font} 
                    name="font" 
                    onChange={handleOnChange}
                >
                    <option 
                        defaultValue 
                        value={`"Inter", sans-serif`} 
                        className="sans-serif"
                    >Sans Serif</option>
                    <option 
                        value={`"Lora", serif`} 
                        className="serif"
                    >Serif</option>
                    <option 
                        value={`'Inconsolata', monospace`} 
                        className="mono"
                    >Mono</option>
                </select>
            </div>
            <hr className="hr"></hr>
            <label className="switch">
                <input 
                    type="checkbox" 
                    name="darkMode" 
                    checked={theme.darkMode} 
                    onChange={handleOnChange}  
                />
                <span className="slider round"></span>
            </label>
          <img src={moonIcon} alt="moon-icon" className="moon-icon" />
        </div>
      </header>
    )
}