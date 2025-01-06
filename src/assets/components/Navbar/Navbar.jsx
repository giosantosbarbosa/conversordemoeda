import React from "react";
import logo from "../../images/logo.png";
import "./Navbar.css";

export class Navbar extends React.Component {
    render() {
        return (
            <header> 
            <nav>
                <div className="nav-brand"> 
                    <img src= { logo }  alt="logo" />
                </div>
  
                <div className="nav-menu">
                    <ul>
                        <li><a href="https://www.google.com/">Home</a></li>
                        <li><a href="https://www.google.com/">Services</a></li>
                        <li><a href="https://www.google.com/">Portfolio</a></li>
                        <li><a href="https://www.google.com/">About</a></li>
                        <li><a href="https://www.google.com//">Contact</a></li>
                    </ul>
                </div>
  
            </nav> 
        </header>
        );
    }
}