import React from "react";
import imageUrl from "/assets/images/avatar-icon.png";
import imageUrl01 from "/assets/images/logout.png";
import imageUrl02 from "/assets/images/menu.png"
import { Link,NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";

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
            <nav>
            
                <ul >
                        <li><Link to="/">#VanLife</Link></li>
                        <li className="hideonMobile"><NavLink to="/host" style={({isActive}) => isActive ? styling : null}>Host</NavLink></li>
                        <li className="hideonMobile"><NavLink to="/about" style={({isActive}) =>isActive ? styling : null}>About</NavLink></li>
                        <li className="hideonMobile"> <NavLink to="/vans" style={({isActive}) => isActive ? styling : null}>Vans</NavLink></li>
                        <li className="hideonMobile"><Link to="login" className="login-link">
                            <img 
                                src={imageUrl}
                                className="login-icon"
                        /></Link ></li>
                       <li className="hideonMobile"> <button onClick={logout}><img src={imageUrl01} alt="logout" /></button></li>
                       <li className="hideonWeb"><Sidebar/></li>
                        
                </ul>
               

            </nav>
        </header>
    )
}