import React from 'react';
import logo from '../assets/Logo/Logo-brainflix.svg';
import profile from '../assets/Images/Mohan-muruge.jpg';
import search from '../assets/Icons/SVG/Icon-search.svg';


export default function Header() {
    return (
      <header className="header__container">
        <img className="logo" src={logo} alt="brainflix logo" />
        <div className="header__content">
          <input
            className="header__search"
            type="text"
            plasceholder="Search" 
            value="Search"></input>
          <img className="search-icon" src={search}></img>
          
          <button className="header__upload-btn">+ UPLOAD</button>
          <img src={profile} className="header__avatar-img" alt="avatar"/>
        </div>
      </header>
    );
}
