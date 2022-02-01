import React from 'react';
import './navbar.css'


import logo from './logo.png';


const Navbar = () => {
  return (
      <>
          <div className="topnav" id="myTopnav">
            <a style={{margin:"0px 30px"}}>
            <img className='brandImage' src={logo}  alt=""/>

            </a>
         
            <div style={{marginTop:20}}>

            <a href="#home"  style={{fontSize: 30 , marginTop: -12 ,marginLeft: 82 , borderLeft: "2px red solid"}}>Blog</a>
            <a href="#news">Guid</a>
            <a href="#contact">Gest post</a>
            <a href="#about">spotlights</a>
            {/* <a href="javascript:void(0);" className="icon" onclick="myFunction()">
                <i className="fa fa-bars"></i>
            </a> */}-
            <a href="#security">Safety & Security</a>
            <a href="#announcements">Announcemenst</a>

            </div>
          </div>
      </>
  );
};

export default Navbar;
