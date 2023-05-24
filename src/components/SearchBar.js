import React, { useState } from 'react'
import searchIcon from '../assets/images/icon-search.svg'
import { addFormData } from '../redux/formDataReducer'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

const SearchBar = (props) => {
  const { handleOnChange } = props
  const { theme, status, keyWord } = useSelector(state => state)
  const dispatch = useDispatch()
  const [errors, setErrors] = useState(false)

  const handleSubmit = (e) => {
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
                ${theme.darkMode ? 'dark-search-bar' : ''}`}
                placeholder="Search for any word..."
                name="keyWord"
                style={
                    errors
                      ? { border: '1px solid #FF5252' }
                      : {}
                }
                value={keyWord}
                onChange={(e) => {
                  setErrors(false)
                  handleOnChange(e)
                }}
                disabled={status === 'submitting'}
                required
                onInvalid={(e) => {
                  e.preventDefault()
                  setErrors(true)
                }}
            />
            {errors && (
                <p className="required-error">
                Whoops, can&apos;t be empty...
                </p>
            )}
            <button className="submit-btn" type="submit">
                <img src={searchIcon} alt="search-icon" className="search-icon" />
            </button>
            </form>
        </section>
  )
}

SearchBar.propTypes = {
  handleOnChange: PropTypes.func
}

export default SearchBar
