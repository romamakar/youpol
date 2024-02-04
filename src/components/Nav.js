import React, { useState } from 'react';
import logo from '../images/youpol_logo_2017.svg';
import magnifier from '../images/search_magnifier.svg'
import theme from '../images/theme_button.png';

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

  return (
    <div style={disp}>
      <img style={buttonStyle} src={logo} alt="Logo" />

      <label>
      <input type="text" placeholder="Search" />
      <button>
      <img style={buttoStyle} src={magnifier} alt="YouPol music"/>
      </button>
      </label>

      <div>
        <button>
          <img style={buttoStyle} src={theme} alt="Theme"/>
        </button>
      </div>

    </div>
  );
};

export default Nav;
