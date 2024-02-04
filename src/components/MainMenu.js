import React, { useState } from 'react';
import home from '../images/home.svg';
import shorts from '../images/shorts.svg';
import subscriptions from '../images/subscriptions.svg';
import music from '../images/youpol_music.svg';
import { Link } from 'react-router-dom';


const buttoStyle = {
    width: "30px"
}

const MainMenu = () => {
    return (
        <div>
        <ul>
          <li> 
            <Link to="/" >
              <img style={buttoStyle} src={home} alt="Home" /> 
              Main
              </Link>
          </li>
          <li>
            <Link to="/youpol_shorts" >
              <img style={buttoStyle} src={shorts} alt="YouPol Shorts"/>
              YuoPol Shorts
              </Link>
          </li>
          <li>
            <Link to="/subscriptions" >
              <img style={buttoStyle} src={subscriptions} alt="Subscriptions"/>
              Subscriptions
              </Link>
          </li>
          <li>
            <Link to="/youpol_music" >
              <img style={buttoStyle} src={music} alt="YouPol Music"/>
              YouPol music
              </Link>
              
          </li>
        </ul>
        
  
      </div>
    );
  };
  
  export default MainMenu;
  