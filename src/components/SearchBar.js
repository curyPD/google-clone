import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/Google_2015_logo.svg";
import logoWhite from "../img/googlelogo_light.png";
import { IoMdSearch, IoMdClose } from "react-icons/io";
import Navbar from "./Navbar";

function SearchBar(props) {
    return (
        <header className="header">
            <div className="header__flex-container">
                <div className="header__logo-box">
                    <Link to="/">
                        <img
                            src={props.theme === "light" ? logo : logoWhite}
                            alt="Google logo"
                            className="logo"
                        />
                    </Link>
                </div>
                <form className="header__form" onSubmit={props.controlSubmit}>
                    <input
                        type="text"
                        className="input"
                        value={props.inputData}
                        onChange={props.controlChange}
                    />
                    <button
                        onClick={props.clearInput}
                        className="btn btn--clear-input"
                        type="button"
                    >
                        <IoMdClose className="header__icon" />
                    </button>
                    <span className="divider">&nbsp;</span>
                    <button className="btn btn--search">
                        <IoMdSearch className="header__icon" />
                    </button>
                </form>
                <div className="theme-btn-box">
                    <p className="theme-text">Light</p>
                    <div className="theme-btn" onClick={props.switchTheme}>
                        <div></div>
                    </div>
                    <p className="theme-text">Dark</p>
                </div>
            </div>
            <Navbar />
        </header>
    );
}

export default SearchBar;
