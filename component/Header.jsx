import React from "react";
import imageUrl from "/assets/images/avatar-icon.png";
import { Link,NavLink, redirect } from "react-router-dom";

export function logout(){
    localStorage.removeItem('loggedin');
}
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
                <Link to="login" className="login-link">
                    <img 
                        src={imageUrl}
                        className="login-icon"
                   /></Link >
                   <button onClick={logout}>logout</button>
            </nav>
        </header>
    )
}