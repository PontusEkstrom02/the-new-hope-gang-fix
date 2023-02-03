import { Outlet, NavLink } from "react-router-dom";
import React from 'react'
const Layout = () => {
    return (
        <> 
        <header>
            <nav className="nav">
                <a href="/" className= "nav-title">Star Wars API</a>
            </nav>
        </header>
        <Outlet />
        </>
    )
};

export default Layout;