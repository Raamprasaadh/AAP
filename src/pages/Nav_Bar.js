//Purpose of the file : to display the NavBar and help user to navigate through the page.
//ToDo add Logo
//check why it is not loading pages without location.reload
import React, { Component } from 'react';
import {BrowserRouter, NavLink} from 'react-router-dom';

import '../css/style.css';
class NavBar extends Component {
    render(){
        return(
            <div className="navBar">
                <BrowserRouter>
                <ul>
                    <li onClick={()=>{window.location.reload(false);}}><NavLink exact to="/">Home</NavLink></li>
                    <li onClick={()=>{window.location.reload(false);}}><NavLink exact to="/products">Products</NavLink></li>
                    <li onClick={()=>{window.location.reload(false);}}><NavLink to="/contact">Contact</NavLink></li>
                    <li onClick={()=>{window.location.reload(false);}}><NavLink to="/about">About</NavLink></li>
                </ul>
                </BrowserRouter>
            </div>
        );
    }
}
export default NavBar;