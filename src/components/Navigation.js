import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return ( 
        <div class="nav_wrap">
                <Link to="/" className="link">Home</Link>
                <Link to="/about" className="link">About</Link>
        </div>
    );
}

export default Navigation;