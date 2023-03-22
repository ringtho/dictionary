import React, { useState } from "react"


import Header from "./components/Header"
import Main from "./components/Main"


function App() {

  const colorTheme = JSON.parse(localStorage.getItem("darkMode")) || false
  const fontTheme = localStorage.getItem("font") || ""

  const [theme, setTheme] = useState({
    font: fontTheme, 
    darkMode: colorTheme
  })

  return (
    <div className="app-container">
      <Header theme={theme} setTheme={setTheme} />
      <Main theme={theme} />
    </div>
  );
}

export default App
