import React from "react"
import searchIcon from "../assets/images/icon-search.svg"
import { useSelector } from "react-redux"


export default function SearchBar(props){
    const {handleSubmit, handleOnChange} = props
    const {theme, status, keyWord} = useSelector(state => state)

    return (
        <section className="search-bar-container">
            <form onSubmit={handleSubmit}>
            <input type="text" 
                id="search-bar" 
                className={`search-bar ${theme.darkMode ? "dark-search-bar": ""}`} 
                placeholder="Search for any word..."
                name="keyWord"
                value={keyWord}
                onChange={handleOnChange}
                required
                disabled={status==="submitting"}
                onInvalid={(e) => { 
                    e.target.setCustomValidity("Whoops, can't be empty...") }}
                onInput={F => F.target.setCustomValidity('')}
                />
            <button className="submit-btn" type="submit">
                <img src={searchIcon} alt="search-icon" className="search-icon" />
            </button>
            </form>
        </section>
    )
}