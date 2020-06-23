//Purpose of the file : to display the NavBar and help user to navigate through the page.
//ToDo add Logo
//check why it is not loading pages without location.reload
import React, { Component } from 'react';
import { HashRouter, NavLink } from 'react-router-dom';
import Logo from '../../src/logo.svg'
import '../css/style.css';
class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="navBar">

                    <HashRouter>
                        {/*<img src={Logo} className="logo"  />*/}
                       {/* <ul className = "navLeft">
                            <li onClick={() => { window.location.reload(false); }}><NavLink to={process.env.PUBLIC_URL + "/"}><b>AAP</b></NavLink></li>
        </ul>*/}
                        <ul className = "navRight">
                            <li onClick={() => { window.location.reload(false); }}><NavLink to={process.env.PUBLIC_URL + "/"}><b>AAP</b></NavLink></li>
                            <li onClick={() => { window.location.reload(false); }}><NavLink exact to={process.env.PUBLIC_URL + "/home"}>Home</NavLink></li>
                            <li onClick={() => { window.location.reload(false); }}><NavLink to={process.env.PUBLIC_URL + "/products"}>Products</NavLink></li>
                            <li onClick={() => { window.location.reload(false); }}><NavLink to={process.env.PUBLIC_URL + "/about"}>About Us</NavLink></li>
                            <li onClick={() => { window.location.reload(false); }}><NavLink to={process.env.PUBLIC_URL + "/contact"}>Contact Us</NavLink></li>
                        </ul>
                    </HashRouter>

                </div>
                <div className="navBar navRight">
                    <HashRouter>
                        <ul>

                        </ul>
                    </HashRouter>

                </div>
            </div>
        );
    }
}
export default NavBar;