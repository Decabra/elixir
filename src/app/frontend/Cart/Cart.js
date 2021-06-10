import React, { useEffect, useState } from 'react';
import styles from './Cart.module.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";
import Heading from "../Heading/Heading";
// import Engineering from '../../../assets/img/engineering.png';
// import Art from '../../../assets/img/art.png';

function Cart () {
    let checkoutLink = [
        {name:"Checkout", path:'/checkout'},
    ];

    let [products, setProducts] = useState(localStorage.getItem("itemDetail")? JSON.parse(localStorage.getItem("itemDetail")): []);
    let [totalPrice, setTotalPrice] = useState(0);
    const loginState = JSON.parse(localStorage.getItem('loginState'));

    const enable = () => {
        let sc = document.getElementById("sc");
        if(sc != null)
            if(totalPrice > 0){    
                sc.style.pointerEvents = "auto";    
            }
            else{
                sc.style.pointerEvents = "none"
            }
    }

    const emptyCart = () => {
        setProducts([])
        window.localStorage.removeItem("itemDetail");
    }

    useEffect(() => {
        let cartItems = products;
        let total_price = 0;
        cartItems.forEach((item) => {
            total_price += parseInt((item.price.split("$"))[1]);
        })
        setTotalPrice(total_price);
        localStorage.setItem("totalPrice", JSON.stringify("$"+totalPrice))
    })


    return (
    <div  className='bg-white' data-testid="Cart">
    <Header/>
    <Heading text="Cart" />
    <section className="row" style={{margin:'20px'}}>
    <section  className={`col-md-8 shadow rounded m-auto ml-5  mr-5 mt-2 mb-5 pb-5 pt-3 container ${styles.car}`}  >
        <section>
            <button className="btn btn-lg btn-outline-danger mx-4 mt-3" onClick={emptyCart}>Empty Cart</button>
        </section>
        <section className="col-md-12 m-auto mx-4 pb-5 ">
            {products.map((item, index) => (
                <div key={index} className="d-flex px-3 pt-5">
                <div className="col-md-3" style={{width:'25%'}}>
                    <img className="rounded-circle" src={item.Image} width="120px" height="150px;"/>
                </div>
                <div className={`col-md-6 pt-1 ${styles.templateName}`} style={{width:'48%'}}>
                    <a className="card-link h2 text-dark" style={{textDecoration:'none'}} href="#">{item.name}</a>
                    <p className="h6 text-muted text-wrap">{item.desc}</p>
                </div>
                <div className="col-md-3 text-center pt-1">
                    <h4 className="h3 fw-bold">{item.price}</h4>
                    <div className="btn-group gap-2 py-1">
                        {/* <a href="#" className="text-muted"><span className="material-icons">visibility</span></a> */}
                        <a href="#" className="text-muted" onClick={() => {
                            let cartItems = products;
                            cartItems = cartItems.filter((x) => x!== item);
                            setProducts(cartItems);
                            localStorage.setItem("itemDetail", JSON.stringify(cartItems));
                        }} ><span className="material-icons  text-danger">highlight_off</span></a>
                    </div>
                </div>
            </div>    
            ))}
        </section>
    </section>
    <section  className={` col-md-4 ${styles.card1}`} style={{marginRight: '25px'}}>
        <div className="rounded border-1 bg-white shadow pb-5 pt-3 text-center">
            <h3 className="h2 text-center pt-5 pb-5">Your Cart Total</h3>
            <h3 className="h2 text-center fw-bold pt-5 pb-5">{"$"+totalPrice}</h3>
            {
                checkoutLink.map(({name ,path}) => (
                    <Link id="sc" className={`rounded btn btn-outline-primary btn-lg mt-5 mb-5 ${styles.disabledLink} `} to={ loginState===false ? '/login' : path} onClick={enable()}  >
                         Secure Checkout
                    </Link>
                ))
            }
        </div>
    </section>
</section>
    <Footer/>
    </div>
);}

Cart.propTypes = {};

Cart.defaultProps = {};

export default Cart;
