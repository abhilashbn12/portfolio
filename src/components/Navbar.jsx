import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../data';
import './navbar.css';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="nav">
            <div className={`${showMenu ? 'nav_menu show_menu' : 'nav_menu'}`}>
                <ul className="nav_list">
                    {links.map(({ name, icon, path }, index) => {
                        return (
                            <li className='nav_item' key={index}>
                                <NavLink to={path} className={({ isActive }) => isActive ? 'nav_link active_nav' : 'nav_link'}
                                    onClick={() => setShowMenu(!showMenu)}
                                >
                                    {icon}
                                    <h3 className='nav_name'>{name}</h3>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={`${showMenu ? 'nav_toggle animate-toggle' : 'nav_toggle'}`} onClick={() => setShowMenu(!showMenu)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}

export default Navbar