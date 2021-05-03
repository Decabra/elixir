import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkout.module.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Checkout = () => (
  <div className='bg-white' data-testid="Cart">
      <Header/>
         <nav className="navbar navbar-light checkout-nav" className={styles.checkoutNav} >
		    <div className="container-fluid checkout-nav-head" className={styles.checkoutNavHead}  >
		      <span className="navbar-brand mb-0 h1 text-light" className={styles.checkoutNavText}>Secure Checkout</span>
		    </div>
		 </nav>
         <div className="container pb-5 mt-3">
			<div className="wrapper wrapper-content animated fadeInRight">
			    <div className="row">
			        <div className="col-md-8 pb-5" style={{marginTop: "19px"}}>
			                <form className="row g-3 bg-white shadow p-5">
			                <h2 className="h2">Billings Details</h2>
			                <div className="col-md-6">
			                  <label for="inputFirstName" className="form-label">First Name</label>
			                  <input type="text" className="form-control" style={{outline: "none"}} id="inputFirstName"/>
			                </div>
			                <div className="col-md-6">
			                  <label for="inputLastName" className="form-label">Last Name</label>
			                  <input type="password" className="form-control" id="inputLastName"/>
			                </div>
			                <div className="col-12">
			                  <label for="inputCountry" className="form-label">Country</label>
			                  <input type="text" className="form-control" id="inputCountry" placeholder="Pakistan , United Kingdom etc..."/>
			                </div>
			                <div className="row m-l-1 m p-2">
			                    <div className="col-md-6">
			                      <label for="inputCity" className="form-label">City</label>
			                      <input type="text" className="form-control" id="inputCity" placeholder="Faisalabad, Multan etc..."/>
			                    </div>
			                    <div className="col-md-4 p-l-4">
			                      <label for="inputZip" className="form-label">Zip</label>
			                      <input type="text" className="form-control" id="inputZip" placeholder="zip/postal code"/>
			                    </div>
			                </div>
			                <div className="col-12">
			                  <label for="inputAddress" className="form-label">Address</label>
			                  <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
			                </div>
			                <h2 className="m-y-4">Select Payment Method</h2>
			                <div className="col-12">
			                  <label for="inputCardNumber" className="form-label">Card Number</label>
			                  <input type="text" className="form-control" id="inputCardNumber" placeholder="card number"/>
			                </div>
			                <div className="row p-2">
			                  <div className="col-md-6">
			                    <label for="inputExpiryDate" className="form-label">Expiry Date</label>
			                    <input type="date" className="form-control" id="inputExpiryDate"/>
			                  </div>
			                  <div className="col-md-6">
			                    <label for="inputCVV" className="form-label">CVV</label>
			                    <input type="text" className="form-control" id="inputCVV" placeholder="CVV"/>
			                  </div>
			                </div>
			                <div className="d-grid d-md-flex justify-content-md-end">
			                  <button className="btn btn-lg btn-outline-success" type="button">Make Payment</button>
			                </div>
			              </form>

			        </div>
			        <div className="col-md-4">
			            <div className="card border-0">
			              <div className="card-body">
			                <h5 className="card-title text-center">Order Summary</h5>
			                <div className="row">
			                  <p className="card-text col-md-9">Shopping Website</p>
			                  <p className="card-text col-md-3">$50</p>
			                </div>
			                <div className="row">
			                  <p className="card-text col-md-9">Shopping Website</p>
			                  <p className="card-text col-md-3">$50</p>
			                </div>
			                <hr style={{height:'1px',backgroundColor: "#242121"}}/>
			                <div className="row p-2 text-center">
			                  <p className="card-text col-md-6 h4">Total</p>
			                  <p className="card-text col-md-6 h4">$1500</p>
			                </div>
			              </div>
			            </div>
			        </div>
			    </div>
			</div>
			</div> 

      <Footer/>
      </div>
);

Checkout.propTypes = {};

Checkout.defaultProps = {};

export default Checkout;
