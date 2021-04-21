import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styles from './Header.module.scss';
import logo from '../../../assets/img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    let [menuState, setMenuState] = useState(false)
    let [menuCounter, setMenuCounter] = useState(1)
    let navLinks = [
        {name : "Home", extraClasses: '', path: "/"},
        {name : "Products",  extraClasses: '', path: "/products"},
        {name : "Request template", extraClasses: 'is-3-tablet is-3-desktop ',  path: "/request_template"},
        {name : "Contact us",  extraClasses: 'is-2',  path: "/contact"},
        {name : "Log in",  extraClasses: '', path: "/login"},
        {name : "Sign up",  extraClasses: '', path: "/register"}
    ]
    let toggleMenu = () => {
        setMenuState(!menuState);
        setMenuCounter(menuCounter + 1);
    }
    return (
        <header className="columns is-justify-content-space-between is-flex-wrap-wrap is-align-items-center m-0 p-3">

            <div className="columns column is-flex is-justify-content-space-between is-2 is-12-mobile m-0" >
                <Link to={"/"}>
                    <div className="column is-10-mobile is-flex">
                        <img className={styles.logo} src={logo}  alt="elixir"/>
                        <span className="is-size-3 pl-2">Elixir</span>
                    </div>
                </Link>
                <div className="column is-2-mobile is-flex is-justify-content-center is-align-items-center is-hidden-tablet p-0">
                    <Link  className="column is-1" to={'/cart'}>
                        <FontAwesomeIcon  icon={faShoppingCart} className="is-size-5" />
                    </Link>
                    <div onClick={toggleMenu}  className={styles.navMenuIcon}>
                        <FontAwesomeIcon  icon={faBars} className={`is-size-3`} />
                    </div>
                </div>
            </div>
            <nav className={`${menuState ? 'is-hidden-mobile' : ''} columns column is-10-desktop is-8-widescreen is-12-tablet has-text-centered-tablet is-align-items-flex-end p-pb-md-6 p-pr-md-6 has-text-weight-semibold`}>
                    {navLinks.map( ({name, extraClasses, path}, index) => (
                        <Link key={index} className={`column ${extraClasses}`} to={path}>
                                {name}
                        </Link>
                    ))}
                    <Link  className="column is-hidden-mobile is-1" to={'/cart'}>
                        <FontAwesomeIcon  icon={faShoppingCart} className="is-size-5" />
                    </Link>
            </nav>
        </header>
    );
}

export default Header;
