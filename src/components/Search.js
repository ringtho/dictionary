import React from "react";
import searchIcon from "../assets/images/icon-search.svg"

export default function Search() {
    return (
        <section className="search-bar-container">
          <input type="text" className="search-bar" placeholder="Enter Word" />
          <img src={searchIcon} alt="search-icon" className="search-icon" />
        </section>
    )
}