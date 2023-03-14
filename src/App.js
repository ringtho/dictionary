import React from "react"
import AppLogo from "./assets/images/logo.svg"
import MoonIcon from "./assets/images/icon-moon.svg"
import SearchIcon from "./assets/images/icon-search.svg"
import PlayIcon from "./assets/images/icon-play.svg"
import NewWindow from "./assets/images/icon-new-window.svg"


function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <img src={AppLogo} alt="logo" className="logo" />
        <div className="app-font-slider">
          <div className="select-div">
            <div className="select-div">
            <select>
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
      <main>
        <section className="search-bar-container">
          <input type="text" className="search-bar" />
          <img src={SearchIcon} alt="search-icon" className="search-icon" />
        </section>
        <section>
          <div className="keyword-container">
            <div className="word">
              <h1>Keyboard</h1>
              <p>/ˈkiːbɔːd/</p>
            </div>
            <img src={PlayIcon} alt="play-icon" className="play-icon" />
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
            <a href="https://en.wiktionary.org/wiki/keyboard" target="_blank"><img src={NewWindow} alt="" className="new-window" /></a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App
