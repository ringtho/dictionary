import React from "react"
import searchIcon from "../assets/images/icon-search.svg"
import { addFormData } from "../redux/formDataReducer"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"


export default function SearchBar(props){
    const { handleOnChange} = props
    const {theme, status, keyWord} = useSelector(state => state)
    const dispatch = useDispatch()
    const { register, trigger, formState: {errors}} = useForm()


    async function handleSubmit(e){
        e.preventDefault()
        const isValid = await trigger()
        if(isValid){
            dispatch(addFormData(keyWord))
        } 
    }

    return (
        <section className="search-bar-container">
            <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                id="search-bar" 
                className={`search-bar ${errors.search && "searchbar-error"} 
                ${theme.darkMode ? "dark-search-bar": ""}`} 
                placeholder="Search for any word..."
                name="keyWord"
                {...register("search", {
                    required: true
                })}
                value={keyWord}
                onChange={handleOnChange}
                disabled={status==="submitting"}
                />
            {errors.search && (
                <p className="required-error">
                    {errors.search.type === "required" && "Whoops, can't be empty..."}
                </p>
            )}
            <button className="submit-btn" type="submit">
                <img src={searchIcon} alt="search-icon" className="search-icon" />
            </button>
            </form>
        </section>
    )
}