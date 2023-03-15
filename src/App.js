import React from "react"
import appLogo from "./assets/images/logo.svg"
import moonIcon from "./assets/images/icon-moon.svg"
import searchIcon from "./assets/images/icon-search.svg"
import playIcon from "./assets/images/icon-play.svg"
import newWindow from "./assets/images/icon-new-window.svg"


function App() {
  return (
    <div className="app-container">
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
      <main>
        <section className="search-bar-container">
          <input type="text" className="search-bar" placeholder="Enter Word" />
          <img src={searchIcon} alt="search-icon" className="search-icon" />
        </section>
        <section>
          <div className="keyword-container">
            <div className="word">
              <h1>Keyboard</h1>
              <p>/ˈkiːbɔːd/</p>
            </div>
            <img src={playIcon} alt="play-icon" className="play-icon" />
          </div>
          <div className="noun-container">
            <h4 className="noun">noun</h4>
            <p className="meaning">Meaning</p>
            <ul className="list">
              <li>A set of keys used to operate a typewriter, computer etc.</li>
              <li>A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</li>
              <li>A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.</li>
            </ul>
            <div>
              <span className="synonym">Synonyms</span>
              <span className="synonym-description">electronic keyboard</span>
            </div>
          </div>
          <div className="verb-container">
            <h4 className="verb">verb</h4>
            <p className="meaning">Meaning</p>
            <ul className="list">
              <li>A set of keys used to operate a typewriter, computer etc.</li>
            </ul>
            <p className="word-example">“Keyboarding is the part of this job I hate the most.”</p>
          </div>
          <div className="source-container">
            <p className="source">Source</p>
            <a className="source-link" 
            target="_blank" 
            href="https://en.wiktionary.org/wiki/keyboard"
            >https://en.wiktionary.org/wiki/keyboard</a>
            <a href="https://en.wiktionary.org/wiki/keyboard" target="_blank">
              <img src={newWindow} alt="" className="new-window" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App
