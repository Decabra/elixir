import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cart.module.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import img1 from '../../../assets/img/right.jpg';
import {Link} from "react-router-dom";


const Cart = () =>{
    let checkoutLink = [
        {name:"Checkout", path:'/checkout'},
    ];
  return (
  <div  className='bg-white' data-testid="Cart">
    <Header/>
    <nav className={`navbar navbar-light ${styles.cartNav}`}>
      <div className={`container-fluid text-center ${styles.cartNavHead}`}>
        <span className={`navbar-brand mb-5 h1 text-light ${styles.cartNavText}`}>Cart</span>
      </div>
    </nav>
    <section className="row" style={{margin:'20px'}}>
    <section  className={`col-md-8 shadow rounded m-auto ml-5  mr-5 mt-2 mb-5 pb-5 pt-3 container ${styles.car}`}  >
        <section>
            <button className="btn btn-lg btn-outline-danger mx-4 mt-3">Empty Cart</button>
        </section>
        <section className="col-md-12 m-auto mx-4 pb-5 ">
            <div className="d-flex px-3 pt-5">
                <div className="col-md-3" style={{width:'25%'}}>
                    <img className="rounded-circle" src={img1} width="120px" height="120px;"/>
                </div>
                <div className={`col-md-6 pt-1 ${styles.templateName}`} style={{width:'48%'}}>
                    <a className="card-link h2 text-dark" style={{textDecoration:'none'}} href="#">Zapmata</a>
                    <p className="h6 text-muted text-wrap ">Online Engineering Design <br/> Tools</p>
                    <span className={`fa fa-star checked ${styles.star} `}></span>
                    <span className={`fa fa-star checked ${styles.star} `}></span>
                    <span className={`fa fa-star checked ${styles.star} `}></span>
                    <span className={`fa fa-star checked ${styles.star} `}></span>
                    <span className={`fa fa-star checked ${styles.star} `}></span>
                    <span>(523 ratings)</span>
                </div>
                <div className="col-md-3 text-center pt-1">
                    <h4 className="h3 fw-bold">$50</h4>
                    <div className="btn-group gap-2 py-3">
                        <a href="#" className="text-muted"><span className="material-icons">visibility</span></a>
                        <a href="#" className="text-muted"><span className="material-icons  text-danger">highlight_off</span></a>
                    </div>
                </div>
            </div>
            <div className="d-flex px-3 pt-5">
                <div className="col-md-3" style={{width:'25%'}}>
                    <img className="rounded-circle" src={img1} width="120px" height="120px;"/>
                </div>
                <div className={`col-md-6 pt-1 ${styles.templateName} `} style={{width:'48%'}}>
                    <a className="card-link h2 text-dark" style={{textDecoration:'none'}} href="#">Zapmata</a>
                    <p className="h6 text-muted text-wrap ">Online Engineering Design <br/> Tools</p>
                    <span className={`fa fa-star checked ${styles.star} `}></span>
                    <span className={`fa fa-star checked ${styles.star} `}></span>
                    <span className={`fa fa-star checked ${styles.star} `}></span>
                    <span className={`fa fa-star checked ${styles.star} `}></span>
                    <span className={`fa fa-star checked ${styles.star} `}></span>
                    <span>(523 ratings)</span>
                </div>
                <div className="col-md-3 text-center pt-1">
                    <h4 className="h3 fw-bold">$50</h4>
                    <div className="btn-group gap-2 py-3">
                        <a href="#" className="text-muted"><span className="material-icons">visibility</span></a>
                        <a href="#" className="text-muted"><span className="material-icons  text-danger">highlight_off</span></a>
                    </div>
                </div>
            </div>
        </section>
    </section>
    <section  className={` col-md-4 ${styles.card1}`} style={{marginRight: '25px'}}>
        <div className="rounded border-1 bg-white shadow pb-5 pt-3 text-center">
            <h3 className="h2 text-center pt-5 pb-5">Your Cart Total</h3>
            <h3 className="h2 text-center fw-bold pt-5 pb-5">$170</h3>
            {
                checkoutLink.map(({name ,path}) => (
                    <Link className="rounded btn btn-outline-primary btn-lg mt-5 mb-5 " to={path}>
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
