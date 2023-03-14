import React from "react"
import AppLogo from "./assets/images/logo.svg"
import MoonIcon from "./assets/images/icon-moon.svg"


function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <img src={AppLogo} alt="logo" className="logo" />
        <div className="app-font-slider">
          <div className="select-div">
            <div>
            <select className="select-div">
                <option defaultValue value="grapefruit">Sans Serif</option>
                <option value="lime">Serif</option>
                <option value="coconut">Mono</option>
              </select>
            </div>
          </div>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <img src={MoonIcon} alt="moon-icon" className="moon-icon" />
        </div>
      </header>
    </div>
  );
}

export default App
