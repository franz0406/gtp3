import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logoImg from "../../assets/logo.svg";
import './navbar.css';

function Navbar(){
    return(
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links-logo">
                    <img src={logoImg} alt="logo"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;