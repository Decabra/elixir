import React from 'react';
import PropTypes from 'prop-types';
import './Cart.scss';

const Cart = () => (
  <div className="Cart" data-testid="Cart">
    <form>
        <h3 className="container">Shopping Cart</h3>
        <ul className="nav nav-pills  nav-fill nav-cart">
          <li className="nav-item">
            <button className="btn btn-lg btn-secondary " type="submit">Continue Shopping</button>
          </li>
          <li className="nav-item">
            <p className="text-center nav-item-textcounter">You have 1 item in your cart</p>
          </li>
          <li className="nav-item">
            <button type="button" className="btn btn-lg btn-dark">Empty Cart</button>
          </li>
          
        </ul>
        <div className="shadow p-3 mb-5 bg-body rounded item-body" >
          <div className="ordered-item-arrangement" >
            <img src={img1} className="rounded item-ordered-image " alt="..."/>
            <article className="template-name"><a href="#" className="nav-link active text-lg-start fs-1">Template Name XYZ </a>
              <p className=" nav-link text-md-start">
              Category
            </p></article>
            <article>              
              <button className="navbar-brand btn btn-danger item-delete" >
                  <span className="material-icons">delete</span>Delete</button>
              <h4 className="item-price">$15</h4>
            </article>
          </div>
          <hr/>
          <div>
            <ul className="nav nav-pills navbar-light  nav-fill checkout-area" >
            <li className="nav-item">
              <button className="btn btn-md btn-secondary" type="submit">Continue Shopping</button>
            </li>
            <li className="nav-item">
              <h4 className="text-center text-wrap total-font-family">Total US $15</h4>
              <button type="button" className="btn btn-md btn-success">Checkout</button>
            </li>
            
          </ul>
          </div>
        </div>
        </form>
  </div>
);

Cart.propTypes = {};

Cart.defaultProps = {};

export default Cart;
