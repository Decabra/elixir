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
    <nav className="navbar navbar-light " className={styles.cartNav}>
      <div className="container-fluid " className={styles.cartNavHead}>
        <span className="navbar-brand mb-0 h1 text-light " className={styles.cartNavText}>Cart</span>
      </div>
    </nav>
    <section className="d-flex m-auto flex-wrap">
            <section className="col-md-8 shadow rounded m-auto pb-4">
                <section>
                    <nav className="navbar navbar-light">
                      <div className="container-fluid mt-3">
                        <h1 className="h3 mx-5">Items in your cart</h1>
                        <h3 className="h5 mx-5"><strong>(2)</strong></h3>
                      </div>
                    </nav>
                </section>
                <hr className={styles.breakLine}/>
                <section className="col-md-12 m-auto mx-4">
                    <div className="d-flex px-3 pt-5">
                        <div className="col-md-3">
                            <img className="rounded-circle" src={img1} width="100px" height="100px;"/>
                        </div>
                        <div className="col-md-6">
                            <a className="card-link h4" style={{textDecoration:"none"}} href="#">Desktop publishing software</a>
                            <h6>Description list</h6>
                            <p>A description list is perfect for defining terms.</p>
                        </div>
                        <div className="col-md-3 text-center">
                            <h4 className="">$50</h4>
                            <div className="btn-group gap-2 py-3">
                                <a href="#" className="text-muted"><span className="material-icons">visibility</span></a>
                                <a href="#" className="text-muted"><span className="material-icons  text-danger">highlight_off</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex px-3 pt-5">
                        <div className="col-md-3">
                            <img className="rounded-circle" src={img1} width="100px" height="100px;"/>
                        </div>
                        <div className="col-md-6">
                            <a className="card-link h4" style={{textDecoration:"none"}} href="#">Desktop publishing software</a>
                            <h6>Description list</h6>
                            <p>A description list is perfect for defining terms.</p>
                        </div>
                        <div className="col-md-3 text-center">
                            <h4 className="">$50</h4>
                            <div className="btn-group gap-2 py-3">
                                <a href="#" className="text-muted"><span className="material-icons">visibility</span></a>
                                <a href="#" className="text-muted"><span className="material-icons  text-danger">highlight_off</span></a>
                            </div>
                        </div>
                    </div>
                </section>
                <hr className={styles.breakLine}/>
                <section>
                    <nav className="navbar navbar-light">
                      <div className="container-fluid">
                        <button className="btn btn-white  d-flex"><span className="material-icons">arrow_left
                        </span> Continue shopping</button>
                        {
                            checkoutLink.map(({name ,path}) => (
                                <Link className="rounded btn btn-outline-primary btn-md d-flex" to={path}>
                                    <span className="material-icons">shopping_cart</span> Checkout
                            </Link>
                            ))
                        }
                        </div>
                    </nav>
                </section>
            </section>
            <section className="col-md-3 m-auto">
                <div className="card  text-center shadow" className={styles.card1} >
                  <div className="card-body shadow text-center rounded">
                    <h5 className="card-title h4">Order Summary</h5>
                    <hr className={styles.breakLine}/>
                    <div className="row p-2 text-center">
                      <p className="card-text col-md-6 h4">Total</p>
                      <p className="card-text col-md-6 h4">$1500</p>
                    </div>
                    <hr className={styles.breakLine}/>
                    <p className="card-text">*For United States, France and Germany applicable sales tax will be applied</p>
                    <div className="text-center">
                        <div className="btn-group gap-2">
                        {
                            checkoutLink.map(({name ,path}) => (
                                <Link className="rounded btn btn-outline-primary btn-md d-flex" to={path}>
                                    <span className="material-icons">shopping_cart</span> Checkout
                            </Link>
                            ))
                        }
                        <a href="#" className="rounded btn btn-outline-danger btn-md"> Empty Cart</a>
                        </div>
                    </div>
                  </div>
                </div>
            </section>
        </section>
    <Footer/>
    </div>
);}

Cart.propTypes = {};

Cart.defaultProps = {};

export default Cart;
