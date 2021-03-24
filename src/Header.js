import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';

function Header() {
    const [{ basket, user }] = useStateValue();

    const login = () => {
        if (user) {
            auth.signOut();
        }
    }


    return <nav className="header">
        
        <Link to="/">
            <img className="header__logo" src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/298/4925697298_1ab905a8-2ba6-451a-aa38-176587ab5a26.png?cb=1616549959"></img>
        </Link>

        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
            <Link to={!user && "/login"} className="header__link">
                <div onClick={login} className="header__option">
                <span className="header__optionLineOne">
                        {user ? `Hello ${user.email}` : 'Hello guest'}
                </span>
                <span className="header__optionLineTwo">
                        {user ? 'Sign Out' : 'Sign In'}
                </span>
                </div>
            </Link>

            <Link to="./orders" className="header__link">
                <div className="header__option">
                <span className="header__optionLineOne">
                        Returns
                </span>
                <span className="header__optionLineTwo">
                        Orders
                </span>
                </div>
            </Link>

            <Link className="header__link">
                <div className="header__option">
                <span className="header__optionLineOne">
                        Your
                </span>
                <span className="header__optionLineTwo">
                        Prime
                </span>
                </div>
            </Link>

            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingCartOutlinedIcon />
                    <span className="header__optionLineTwo header__basketCount">
                        {basket.length}
                    </span>
                </div>
            </Link>
        </div>
    </nav>

}

export default Header
