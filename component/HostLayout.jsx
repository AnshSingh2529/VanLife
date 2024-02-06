import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
    const Hoststyling = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "lightcoral"
    }
    return (
        <>
            <nav className="host-nav">
               <NavLink to="/host" end style={ ({isActive}) => isActive ? Hoststyling : null}>Dashboard</NavLink>
                <NavLink to="/host/income" style={ ({isActive}) => isActive ? Hoststyling : null}>Income</NavLink>
                <NavLink to="/host/van" style={ ({isActive}) => isActive ? Hoststyling : null}>Vans</NavLink>
                <NavLink to="/host/reviews" style={ ({isActive}) => isActive ? Hoststyling : null}>Reviews</NavLink>
            </nav>
            <Outlet />  
        </>
    )
}