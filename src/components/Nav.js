import React, { useState } from 'react';
import logo from '../images/youpol_logo_2017.svg';
import magnifier from '../images/search_magnifier.svg';
import theme from '../images/theme_button.png';
import './Nav.css';

const buttoStyle = {
    width: "30px"
};

const Nav = () => {
    return (
        <div className="navi">
            <div className="mainLogoContainer">
                <img className='mainLogo' src={logo} alt="Logo" />
            </div>

            <div className="searchContainer">
                <label className='exp'>
                    <input className="searchInput" type="text" placeholder="Search" />
                    <button className="searchButton">
                        <img style={buttoStyle} src={magnifier} alt="YouPol music" />
                    </button>
                </label>
            </div>

            <div className="themeButtonContainer">
                <button className="themeButton">
                    <img style={buttoStyle} src={theme} alt="Theme" />
                </button>
            </div>

        </div>


    );
};

export default Nav;
