import React, { useState } from 'react';
import logo from '../images/youpol_logo_2017.svg';
import home from '../images/home.svg';
import shorts from '../images/shorts.svg';
import subscriptions from '../images/subscriptions.svg';
import music from '../images/youpol_music.svg';


const disp = {
    display: "flex"

}
const buttoStyle = {
    width: "30px"
}
const buttonStyle = {
    width: "300px"

}

const Nav = () => {
  const [classes, setClasses] = useState(null);

  return (
    <div style={disp}>
      <img style={buttonStyle} src={logo} alt="Logo" />

      <ul>
        <li> 
          <a href='https://www.youtube.com/feed/subscriptions' >
            <img style={buttoStyle} src={home} alt="Home" /> 
            Main
            </a>
        </li>
        <li>
          <a href='https://www.youtube.com/shorts/vNZ3j0aKZvk' >
            <img style={buttoStyle} src={shorts} alt="YuoPol Shorts"/>
            YuoPol Shorts
            </a>
        </li>
        <li>
          <a href='https://www.youtube.com/feed/subscriptions' >
            <img style={buttoStyle} src={subscriptions} alt="Subscriptions"/>
            Subscriptions
            </a>
        </li>
        <li>
          <a href='https://music.youtube.com/' >
            <img style={buttoStyle} src={music} alt="YouPol music"/>
            YouPol music
            </a>
            
        </li>

      </ul>
    </div>
  );
};

export default Nav;
