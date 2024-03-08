import React, {useState} from 'react'
import imageUrl02 from "../assets/images/menu.png";
import imageUrl from "../assets/images/avatar-icon.png";
import imageUrl01 from "../assets/images/logout.png";
import imageUrl03 from "../assets/images/cancel.png";
import { Link, NavLink } from 'react-router-dom';
import logout from "./Header"


function Sidebar() {

    const styling = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "orange"
    }
    
    const [issidebar, setissidebar] = useState(false);
    
    const hidesidebar = () =>{
        setissidebar(false);
    }
    const togglesidebar = () => {
        setissidebar(!issidebar);
    }

  return (
    <>
        <nav>
            <ul>
                <li><button onClick={togglesidebar}><img src={imageUrl02}/></button></li>
            </ul>
        </nav>
        {issidebar && (
        <nav>
            <ul className='nav-sidebar'>
                        <li><button onClick={hidesidebar}><img src={imageUrl03} alt="cancel_image" /></button></li>
                        <li><NavLink to="/host" style={({isActive}) => isActive ? styling : null}>Host</NavLink></li>
                        <li><NavLink to="/about" style={({isActive}) =>isActive ? styling : null}>About</NavLink></li>
                        <li> <NavLink to="/vans" style={({isActive}) => isActive ? styling : null}>Vans</NavLink></li>
                        <li><Link to="login" className="login-link">
                            <img 
                                src={imageUrl}
                                className="login-icon"
                        /></Link ></li>
                       <li> <button onClick={logout}><img src={imageUrl01} alt="logout" /></button></li>
                        
            </ul>
        </nav>
        )}
    </>
    
  )
}

export default Sidebar