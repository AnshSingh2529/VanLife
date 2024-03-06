import React from "react";
import imageUrl from "/assets/images/avatar-icon.png";
import { Link,NavLink } from "react-router-dom";

export function logout(){
      localStorage.removeItem('loggedin')
}
export default function Header (){
    const styling = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "orange"
    }
    return (
        <header> 
            <div className="header-div">
                
            <div className="site-logo"><Link  to="/">#VanLife</Link></div>

            <nav className="header-nav">
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
            </div>
        </header>
    )
}