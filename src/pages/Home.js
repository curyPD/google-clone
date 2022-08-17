import React, { useEffect } from "react";
import logo from "../img/Google_2015_logo.svg";
import logoWhite from "../img/googlelogo_light.png";
import { IoMdSearch, IoMdClose } from "react-icons/io";

function Home(props) {
    return (
        <section className="home">
            <div className="home__logo-box">
                <img
                    src={props.theme === "light" ? logo : logoWhite}
                    alt="Google logo"
                    className="logo"
                />
            </div>
            <form className="home__form" onSubmit={props.controlSubmit}>
                <input
                    type="text"
                    placeholder="Search Google or type a URL"
                    className="input"
                    value={props.inputData}
                    onChange={props.controlChange}
                />
                <IoMdSearch className="input-icon" />
                {props.inputData && (
                    <button
                        onClick={props.clearInput}
                        className="btn btn--clear-input"
                        type="button"
                    >
                        <IoMdClose className="header__icon" />
                    </button>
                )}
            </form>
        </section>
    );
}

export default Home;
