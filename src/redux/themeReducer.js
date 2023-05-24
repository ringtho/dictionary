
export const changeFontFamily = (themeData) => {
  return {
    type: 'CHANGE_FONT_FAMILY',
    payload: themeData
  }
}

export const changeDarkMode = (themeData) => {
  return {
    type: 'CHANGE_DARK_MODE',
    payload: themeData
  }
}

const colorTheme = JSON.parse(localStorage.getItem('darkMode')) || false
const fontTheme = localStorage.getItem('font') || ''

const initialState = {
  font: fontTheme,
  darkMode: colorTheme
}

const themeReducer = (theme = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FONT_FAMILY':
      return {
        ...theme,
        font: action.payload
      }
    case 'CHANGE_DARK_MODE':
      return {
        ...theme,
        darkMode: action.payload
      }
    default:
      return theme
  }
}

export default themeReducer
