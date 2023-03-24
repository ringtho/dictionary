


export function changeFontFamily(themeData){
   return {
        type: "CHANGE_FONT_FAMILY",
        payload: themeData
   }
}

export function changeDarkMode(themeData){
    return {
         type: "CHANGE_DARK_MODE",
         payload: themeData
    }
 }

const colorTheme = JSON.parse(localStorage.getItem("darkMode")) || false
const fontTheme = localStorage.getItem("font") || ""

const initialState = {
    font: fontTheme,
    darkMode: colorTheme
}

export default function themeReducer(theme=initialState, action){
    switch (action.type){
        case "CHANGE_FONT_FAMILY":
            return {
                ...theme,
                font: action.payload
            }
        case "CHANGE_DARK_MODE":
            return {
                ...theme,
                darkMode: action.payload
            }
        default:
            return theme
    }
}