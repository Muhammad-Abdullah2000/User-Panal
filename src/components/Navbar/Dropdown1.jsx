import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import './drop.css'

const Dropdown1 = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if (isMenu) {
        boxClass.push('menuq2');
    } else {
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);

    const toggleSubmenu = () => {
        setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };

    let boxClassSubMenu = ["sub__menus"];
    if (isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    } else {
        boxClassSubMenu.push('');
    }



    return (
        <div>
            <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Categories  &nbsp; <FiChevronDown /> </Link>
                <ul className={boxClassSubMenu.join(' ')} >
                    <li> <NavLink onClick={toggleClass} activeClassName='is-active' to={`/all`}> All Categories </NavLink> </li>
                    <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/sports`}> Sports </NavLink> </li>
                    <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/others`}> Others </NavLink> </li>
                </ul>
            </li>


        </div>
    )
}

export default Dropdown1