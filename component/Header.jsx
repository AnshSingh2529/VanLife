import React from "react";
import { Link,NavLink } from "react-router-dom";

export default function Header (){
    const styling = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "orange"
    }
    return (
        <header> 
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink to="/host" style={({isActive}) => isActive ? styling : null}>Host</NavLink>
                <NavLink to="/about" style={({isActive}) =>isActive ? styling : null}>About</NavLink>
                <NavLink to="/vans" style={({isActive}) => isActive ? styling : null}>Vans</NavLink>
            </nav>
        </header>
    )
}