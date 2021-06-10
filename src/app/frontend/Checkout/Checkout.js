import React, {useEffect, useState} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Heading from "../Heading/Heading";
import styles from './Checkout.module.scss';

const Checkout = () => {

	const [products, setProducts] = useState(localStorage.getItem("itemDetail")? JSON.parse(localStorage.getItem("itemDetail")): []);
	const [derror, setDError] = useState(" ");
	const [cardError, setCardError] = useState(" ");

	const popup = () => {
		if (derror === "" && cardError === ""){
			return (
				<div class={styles.popup}>
					<h2>Successfull Transaction</h2>
				</div>
			)
		}
	}

	const checkText = (val, elem) => {
		if(val.search(/[^A-Za-z\s]/) != -1){
			setDError(elem+" should only contain letters!");
		}
		else{
			setDError("");
		}
	}

	const checkZipCode = (val) => {
		if (val.match(/^[0-9]{5}(?:-[0-9]{4})?$/)){
			setDError("")
		}
		else{
			setDError("Invalid Zip Code!")
		}
	}

	const checkCard = (val) => {
		let visaPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
		let mastPattern = /^(?:5[1-5][0-9]{14})$/;
		let amexPattern = /^(?:3[47][0-9]{13})$/;
		let discPattern = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/; 

		let ccNum  = val;

		let isVisa = visaPattern.test( ccNum ) === true;
		let isMast = mastPattern.test( ccNum ) === true;
		let isAmex = amexPattern.test( ccNum ) === true;
		let isDisc = discPattern.test( ccNum ) === true;

		if( isVisa || isMast || isAmex || isDisc ) {
			setCardError("");
		}
		else {
			setCardError("Please enter a valid card number.");
		}
	}
	
	const checkCVV = (val) => {
		if (val.match(/^[0-9]{3,4}$/)){
			setCardError("")
		}else{
			setCardError("CVV number is invalid!")
		}
	}
	
	const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

	const successPayment = (e) => {
		if (derror === "" && cardError === ""){
			let res = document.getElementById("res");
			res.style.display = "block";
			e.preventDefault();
			sleep(2000);
			localStorage.removeItem("itemDetail");
			window.location.href = "/cart"
		}
	}
	
	return(
	<div className='bg-white' data-testid="Cart">
    <Header/>
	<Heading text="Checkout" />
    
	<div className={`container pb-5 mt-3 `}>
	<div className="wrapper wrapper-content animated fadeInRight">
		<div className="row">
			<div className="col-md-8 pb-5" style={{marginTop: "19px"}}>
					<form className="row g-3 bg-white shadow p-5 mx-1">
					<h2 className="h2">Billings Details</h2>
					<div className="col-md-6">
						<label htmlFor="inputFirstName" className="form-label">First Name</label>
						<input type="text" className="form-control" style={{outline: "none"}} id="inputFirstName" onChange={event => checkText(event.target.value, "First Name")} required/>
					</div>
					<div className="col-md-6">
						<label htmlfor="inputLastName" className="form-label">Last Name</label>
						<input type="text" className="form-control" id="inputLastName" onChange={event => checkText(event.target.value, "Last Name")} required/>
					</div>
					<div className="col-12">
						<label htmlfor="inputCountry" className="form-label">Country</label>
						<input type="text" className="form-control" id="inputCountry" placeholder="Pakistan , United Kingdom etc..." onChange={event => checkText(event.target.value, "Country")} required/>
					</div>
					<div className="row m-l-1 m p-2">
						<div className="col-md-6">
							<label htmlfor="inputCity" className="form-label">City</label>
							<input type="text" className="form-control" id="inputCity" placeholder="Faisalabad, Multan etc..." onChange={event => checkText(event.target.value, "City")} required/>
						</div>
						<div className="col-md-4 p-l-4">
							<label htmlfor="inputZip" className="form-label">Zip</label>
							<input type="number" className="form-control" id="inputZip" placeholder="zip/postal code" onChange={event => checkZipCode(event.target.value)} required/>
						</div>
					</div>
					<div className="col-12">
						<label htmlfor="inputAddress" className="form-label">Address</label>
						<input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required/>
					</div>
					<p style={{color: "red"}}>{derror}</p>
					<h2 className="m-y-4">Select Payment Method</h2>
					<div className="col-12">
						<label htmlfor="inputCardNumber" className="form-label">Card Number</label>
						<input type="number" className="form-control"  id="inputCardNumber" placeholder="card number" onChange={event => checkCard(event.target.value)} required/>
					</div>
					<div className="row p-2">
						<div className="col-md-6">
							<label htmlfor="inputExpiryDate" className="form-label">Expiry Date</label>
							<input type="date" className="form-control" id="inputExpiryDate" required/>
						</div>
						<div className="col-md-6">
							<label htmlfor="inputCVV" className="form-label">CVV</label>
							<input type="text" className="form-control" id="inputCVV" placeholder="CVV" onChange={event => checkCVV(event.target.value)} required/>
						</div>
						<p style={{color:"red"}}>{cardError}</p>
					</div>
					<div className="d-grid d-flex d-md-flex justify-content-md-end">
						<p id="res" style={{color: "white", backgroundColor: "#006e59", marginRight: "20px", padding: "10px 15px", display: "none"}}>Payment Done Succesfully</p>
						<input className="btn btn-lg btn-outline-success" type="button" onClick={e => successPayment(e)} value="Make Payment" />
					</div>
					</form>

			</div>
			<div className="col-md-4 ">
				<div className="card border-0 mx-2">
					<div className="card-body text-center">
					<h5 className="card-title text-center">Order Summary</h5>
					{products.map((item) => (
						<div className="d-flex text-center">
							<p className="card-text  col-md-8">{item.name}</p>
							<p className="card-text col-md-3 ml-5 pl-5">{item.price}</p>
						</div>
					))}
					
					{/* <div className="d-flex text-center">
						<p className="card-text  col-md-8">Artistra</p>
						<p className="card-text col-md-3 ml-5 pl-5">$30</p>
					</div> */}
					<hr style={{height:'1px',backgroundColor: "#242121"}}/>
					<div className="d-flex text-center">
						<p className="card-text col-md-8  h5">Shopping Total</p>
						<p className="card-text col-md-4  h5">{JSON.parse(localStorage.getItem("totalPrice"))}</p>
					</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div> 

      <Footer/>
      </div>
	)
};

Checkout.propTypes = {};

Checkout.defaultProps = {};
export default Checkout;
