import React, { useEffect } from 'react'
import appLogo from '../assets/images/logo.svg'
import moonIcon from '../assets/images/icon-moon.svg'
import { useSelector, useDispatch } from 'react-redux'
import { changeFontFamily, changeDarkMode } from '../redux/themeReducer'

const Header = () => {
  const theme = useSelector(state => state.theme)
  const dispatch = useDispatch()

  const handleOnChange = (e) => {
    const { value, type, checked } = e.target
    type === 'checkbox'
      ? dispatch(changeDarkMode(checked))
      : dispatch(changeFontFamily(value))
  }

  useEffect(() => {
    localStorage.setItem('darkMode', theme.darkMode)
    localStorage.setItem('font', theme.font)
    theme.darkMode
      ? document.body.className = 'dark-theme'
      : document.body.className = 'light-theme'
    document.body.style.fontFamily = theme.font
  }, [theme])

  return (
        <header className="app-header">
        <img src={appLogo} alt="logo" className="logo" />
        <div className="app-font-slider">
            <div className="select-div">
                <select
                    id="select"
                    className={theme.darkMode ? 'dark-theme' : ''}
                    value={theme.font}
                    name="font"
                    onChange={handleOnChange}
                >
                    <option
                        defaultValue
                        value={'"Inter", sans-serif'}
                        className="sans-serif"
                    >Sans Serif</option>
                    <option
                        value={'"Lora", serif'}
                        className="serif"
                    >Serif</option>
                    <option
                        value={'"Inconsolata", monospace'}
                        className="mono"
                    >Mono</option>
                </select>
            </div>
            <hr className={`hr ${theme.darkMode ? 'hr-dark' : ''}`}></hr>
            <label className="switch">
                <input
                    type="checkbox"
                    name="darkMode"
                    checked={theme.darkMode}
                    onChange={handleOnChange}
                />
                <span className="slider round"></span>
            </label>
          <img src={moonIcon} alt="moon-icon"
          className={`moon-icon ${theme.darkMode ? 'dark-moon-icon' : ''}`}
          />
        </div>
      </header>
  )
}

export default Header
