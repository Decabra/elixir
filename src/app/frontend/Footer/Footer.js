import React from 'react';
import styles from './Footer.module.scss';
import {Link} from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import linkedin from '../../../assets/img/linkedin.png'
import facebook from '../../../assets/img/facebook.png'
import twitter from '../../../assets/img/twitter.png'
import insta from '../../../assets/img/insta.png'
import mastercard from '../../../assets/img/mastercard.png'
import visacard from '../../../assets/img/visa.png'

const Footer = () =>{

    let relatedLinks = [
        {name: "Register", path: "/register"},
        {name: "Contact us", path: "/contact"},
        {name: "Products", path: "/products"},
        {name: "Request template", path: "/request_template"}
    ]
    let productsLinks = [
        {name: "Engineering", path: "/products"},
        {name: "Education", path: "/products"},
        {name: "eCommerce", path: "/products"},
        {name: "Art & design", path: "/products"}
    ]
    let socialIcons = [
        {name:"linkedIn", imgPath:linkedin, path:""},
        {name:"facebook", imgPath:facebook, path:""},
        {name:"twitter", imgPath:twitter, path:""},
        {name:"insta", imgPath:insta, path:""},
    ]
    let finInstituteIcons = [
        {name:"mastercard", imgPath:mastercard},
        {name:"visacard", imgPath:visacard}
    ]
    return (
        <footer className={`${styles.footer} columns is-flex-wrap-wrap mt-6 pt-6 px-6`}>
            <div className="column columns is-flex-wrap-wrap">
                <Link className={"column pb-5 is-12"} to={"/"}>
                    <div className="is-10-mobile is-flex">
                        <img className={styles.logo} src={logo}  alt="elixir"/>
                        <span className="is-size-3 pl-2">Elixir</span>
                    </div>
                </Link>
                <div className="column  is-12">
                    {socialIcons.map( ({name, imgPath, path}, index) => (
                        <Link key={index} className="pl-3" to={path}>
                            <img className={styles.socialIcons} src={imgPath} alt={name}/>
                        </Link>
                    ))}
                </div>
                <div className="column  is-12">
                    {finInstituteIcons.map( ({name, imgPath, path}, index) => (
                        <span key={index} className="pl-3">
                            <img className={styles.finInstituteIcons} src={imgPath} alt={name}/>
                        </span>
                    ))}
                </div>
            </div>
            <div className="column has-text-black has-text-left">
                <div className="has-text-weight-semibold pl-3">Related Links</div>
                <div className="">
                    {relatedLinks.map( ({name, path}, index) => (
                    <Link key={index} className={`column`} to={path}>
                        {name}
                    </Link>
                    ))}
                </div>
            </div>
            <div className="column has-text-black has-text-left">
                <div className="has-text-weight-semibold pl-3">Products</div>
                <div className="">
                    {productsLinks.map( ({name, path}, index) => (
                        <Link key={index} className={`column`} to={path}>
                            {name}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="column is-12 pt-6 has-text-centered">© 2021 All Copyrights reserved.</div>
        </footer>
);
}

export default Footer;
