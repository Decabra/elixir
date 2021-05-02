import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cart.scss';
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
    <nav className={"navbar navbar-light cart-nav"}>
      <div className="container-fluid cart-nav-head">
        <span className="navbar-brand mb-0 h1 text-light cart-nav-text">Cart</span>
      </div>
    </nav>
    <section className='bg-white'>
        <div className="container pb-2 pt-4">
            <div className="wrapper wrapper-content ">
                <div className="row">
                    <div className="col-8 shadow rounded bg-white mb-3 pb-3">
                        <div className="d-flex px-4 pt-4">
                            <div className="col-md-10 h5">
                                Items in your cart
                            </div>
                            <div className="col-md-2 h6">
                                (<strong>5</strong>) items
                            </div>
                        </div>
                        <hr className='break-line'style={{height:'0.6px'}}/>
                        <div className="d-flex px-3">
                            <div className="col-md-3">
                                <img className="rounded-circle" src={img1} width="100" height="100"/>
                            </div>
                            <div className="col-md-6">
                                <a className="card-link h5"  href="#">Desktop publishing software</a>
                                <h6 className='h6'>Description list</h6>
                                <p className='h6'>A description list is perfect for defining terms.</p>
                            </div>
                            <div className="col-md-3 text-center">
                                <h4 className="">$50</h4>
                                <div className="btn-group gap-2 py-3">
                                    <a href="#" className="text-muted"><span className="material-icons">visibility</span></a>
                                    <a href="#" className="text-muted"><span className="material-icons text-danger">highlight_off</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex px-3 pt-5">
                            <div className="col-md-3">
                                <img className="rounded-circle" src={img1} width="100" height="100"/>
                            </div>
                            <div className="col-md-6">
                                <a className="card-link h5"  href="#">Desktop publishing software</a>
                                <h6 className='h6'>Description list</h6>
                                <p className='h6'>A description list is perfect for defining terms.</p>
                            </div>
                            <div className="col-md-3 text-center">
                                <h4 className="">$50</h4>
                                <div className="btn-group gap-2 py-3">
                                    <a href="#" className="text-muted"><span className="material-icons">visibility</span></a>
                                    <a href="#" className="text-muted"><span className="material-icons  text-danger">highlight_off</span></a>
                                </div>
                            </div>
                        </div>
                        <hr className='break-line' style={{height:'0.6px'}}/>
                        <div className="px-3 pt-2">
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
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card border-0 rounded shadow bg-white">
                            <div className="card-body bg-white">
                                <h5 className="card-title text-center">Order Summary</h5>
                                <hr className='break-line'/>
                                <div className="row p-2 text-center">
                                    <p className="card-text col-md-6 h4">Total</p>
                                    <p className="card-text col-md-6 h4">$1500</p>
                                </div>
                                <hr className='break-line' style={{height:'0.6px'}}/>
                                <p className="text-md-center h6">
                                    *For United States, France and Germany applicable sales tax will be applied
                                </p>
                                <div className="text-center pt-4">
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
                    </div>
                
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </div>
);}

Cart.propTypes = {};

Cart.defaultProps = {};

export default Cart;
