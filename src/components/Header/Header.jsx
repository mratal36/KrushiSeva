import React from "react";
import {useState} from "react"
import "./Header.css";
import { Link } from 'react-router-dom';
import logo from "../img/logo.png";

const Header = (col = "red") => {

 

  return (
    <div className="h-10 inPhone my-2 nav">
      <div className="flex content-center justify-around">
        <div className="flex items-center cursor-pointer">

          <Link to="/home">
          <img src={logo} className="logoWeb" alt="Logo Not Found"/>
          </Link>
          <h3 className="text-[#006401] text-md font-bold opacity-[.70]">KrushiSeva</h3>
        </div>
        <div className="flex-2">
          <ul className="flex justify-center mt-4 gap-14">
              <Link to="/home" className="text-sm cursor-pointer font-semibold text-[#006401]  ml-6 mr-1.5">
            <li>
              Home
            </li>
              </Link>

            <Link to="/about" className="text-sm cursor-pointer font-semibold text-[#006401] ml-6 mr-1.5">
            <li>About</li>
            </Link>

            <Link to="/contact" className="text-sm cursor-pointer font-semibold text-[#006401] ml-6 mr-1.5">
            <li>Contact</li>            
            </Link>
            <Link to="/faq" className="text-sm cursor-pointer font-semibold text-[#006401] ml-6 mr-1.5">
            <li>AapKeSawal</li>            
            </Link>
            
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Header;
