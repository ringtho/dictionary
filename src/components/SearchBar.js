import React, { useState } from "react"
import searchIcon from "../assets/images/icon-search.svg"
import { addFormData } from "../redux/formDataReducer"
import { useDispatch, useSelector } from "react-redux"

export default function SearchBar(props){
    const { handleOnChange} = props
    const {theme, status, keyWord} = useSelector(state => state)
    const dispatch = useDispatch()
    const [errors, setErrors] = useState(false)

    function handleSubmit(e){
        e.preventDefault()
        dispatch(addFormData(keyWord))
    }

    return (
        <section className="search-bar-container">
            <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                id="search-bar" 
                className={`search-bar 
                ${theme.darkMode ? "dark-search-bar": ""}`} 
                placeholder="Search for any word..."
                name="keyWord"
                style={errors ? {
                    border: '1px solid red',
                  }
                : {}
                }
                value={keyWord}
                onChange={(e) => {
                    setErrors(false)
                    handleOnChange(e)
                }}
                disabled={status==="submitting"}
                required
                onInvalid={(e) => {
                    e.preventDefault()
                    setErrors(true)
                }}
            />
            {errors && (
                <p className="required-error">
                Whoops, can't be empty...
                </p>
            )}
            <button className="submit-btn" type="submit">
                <img src={searchIcon} alt="search-icon" className="search-icon" />
            </button>
            </form>
        </section>
    )
}