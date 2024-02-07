import React, { useState } from 'react';
import home from '../images/home.svg';
import shorts from '../images/shorts.svg';
import subscriptions from '../images/subscriptions.svg';
import music from '../images/youpol_music.svg';
import { Link } from 'react-router-dom';
import './MainMenu.css'

const MainMenu = () => {
    const [activeItem, setActiveItem] = useState('');

    const handleClick = (name) => {
        setActiveItem(name);
    };

    return (
        <div className="main-menu">
            <ul className="menu-list">
                <li className="menu-item">
                    <Link to="/" className={`menu-link ${activeItem === 'home' ? 'active' : ''}`} onClick={() => handleClick('home')}>
                        <img src={home} alt="Home" />
                        Main
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/youpol_shorts" className={`menu-link ${activeItem === 'shorts' ? 'active' : ''}`} onClick={() => handleClick('shorts')}>
                        <img src={shorts} alt="YouPol Shorts" />
                        YouPol Shorts
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/subscriptions" className={`menu-link ${activeItem === 'subscriptions' ? 'active' : ''}`} onClick={() => handleClick('subscriptions')}>
                        <img src={subscriptions} alt="Subscriptions" />
                        Subscriptions
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/youpol_music" className={`menu-link ${activeItem === 'music' ? 'active' : ''}`} onClick={() => handleClick('music')}>
                        <img src={music} alt="YouPol Music" />
                        YouPol music
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default MainMenu;