import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";

function Header() {
    return <nav className="header">
        <Link to="/">
            <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
        </Link>

        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
        </div>

        <div to="/login" className="header__nav">
            <Link className="header__link">
                <div className="header__option">
                <span>
                        Hello STK
                </span>
                <span>
                        Sign In
                </span>
                </div>
            </Link>

            <Link className="header__link">
                <div className="header__option">
                <span>
                        Returns
                </span>
                <span>
                        Orders
                </span>
                </div>
            </Link>

            <Link className="header__link">
                <div className="header__option">
                <span>
                        Your
                </span>
                <span>
                        Prime
                </span>
                </div>
            </Link>
        </div>
    </nav>

}

export default Header
