import React, {Component} from 'react';
import image from "../src/images/instagram-logo.png";
import './Navbar.css'


class Navbar extends Component {
    render() {
      return (
        <div className="navbar">
            <div id="logo">
                <button>
                    <i className="fab fa-instagram"></i>
                    <p id="line"> | </p>
                    <img id="logoText" src = {image} alt="Instagram logo" height= "45px" width = "100px"/>
                </button>
            </div>

            <div id="search">
                <input type="text" placeholder= "Search"></input>
            </div>

            <div id="icons">
                <button><i className="far fa-compass"></i> </button>
                <button><i className="far fa-heart"></i></button>
                <button><i className="far fa-user"></i></button>
            </div>
        </div>
      )
    }
}

export default Navbar;
