import React from "react"
import appLogo from "../assets/images/logo.svg"
import moonIcon from "../assets/images/icon-moon.svg"


export default function Header() {
    return (
        <header className="app-header">
        <img src={appLogo} alt="logo" className="logo" />
        <div className="app-font-slider">
          <div className="select-div">
            <select>
              <option defaultValue value={`"Inter", sans-serif`} className="sans-serif">Sans Serif</option>
              <option value={`"Lora", serif`} className="serif">Serif</option>
              <option value={`'Inconsolata', monospace`} className="mono">Mono</option>
            </select>
          </div>
          <hr className="hr"></hr>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <img src={moonIcon} alt="moon-icon" className="moon-icon" />
        </div>
      </header>
    )
}