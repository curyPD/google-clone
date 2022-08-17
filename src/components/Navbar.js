import React from "react";
import { NavLink } from "react-router-dom";
import { BiNews, BiImage, BiSearch } from "react-icons/bi";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink
                        to="/search/search"
                        className={({ isActive }) =>
                            isActive ? "navbar__link active" : "navbar__link"
                        }
                    >
                        <AiOutlineSearch className="navbar__icon" />
                        <span>All</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/search/image"
                        className={({ isActive }) =>
                            isActive ? "navbar__link active" : "navbar__link"
                        }
                    >
                        <BiImage className="navbar__icon" />
                        <span>Images</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/search/news"
                        className={({ isActive }) =>
                            isActive ? "navbar__link active" : "navbar__link"
                        }
                    >
                        <BiNews className="navbar__icon" />
                        <span>News</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/search/video"
                        className={({ isActive }) =>
                            isActive ? "navbar__link active" : "navbar__link"
                        }
                    >
                        <MdOutlineSmartDisplay className="navbar__icon" />
                        <span>Videos</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
