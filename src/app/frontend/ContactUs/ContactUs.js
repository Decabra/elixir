import React, { useState } from 'react';
import styles from './ContactUs.module.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Heading from '../Heading/Heading';

const ContactUs = () => {
  const [error, setError] = useState(" ");
  const checkName = (val) => {
		if(val.search(/[^A-Za-z\s]/) != -1){
			setError("Name should only contain letters!");
		}
		else{
			setError("");
		}
	}
  const checkEmail = (val) => {
    if (val.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
      setError("");
    }
    else{
      setError("Incorrect Email!");
    }
  }

  const success = () => {
    let res = document.getElementById("res");
    if(error === ""){
      res.style.display = "block"
    }
  }

  const checkIssue = (e) => {
    e.preventDefault();
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let issue = document.getElementById("issue");
    if(name.value === "" || email.value === "" || issue.value === ""){
      setError("Please fill out all fields!")
    }
    if(name.value !== "" && email.value !== "" && issue.value !== ""){
      setError("");      
      success();
    }
  }


  return (
  <div className={styles.ContactUs} data-testid="ContactUs">
      <Header/>
      <Heading text="Elixir Support 24/7" />
      <div className={styles.centerForm}>
        <div className="container">
          <p className="is-size-4 mt-6 mb-4">How can we help?</p>
          <form>
            <input id="name" className="input my-2" type="text" placeholder="Your name e.g., Hamid Ayub" onChange={e => checkName(e.target.value)}  />
            <input id="email" className="input my-2" type="text" placeholder="Your email e.g., abc@example.com" onChange={e => checkEmail(e.target.value)} />
            <textarea id="issue" className="textarea my-2" placeholder="What you want to say?" rows="9" ></textarea>
            <p style={{color: "red"}}>{error}</p>
            <p id="res" style={{color: "white", backgroundColor: "#006e59",padding: "10px 15px", display: "none"}}>Thanks for your contacting us. We will look into your matter and contact back in 24 hours</p>
            <button className="button is-link is-pulled-right my-2 py-4 px-6" onClick={e => checkIssue(e)}>Submit</button> <br/>
          </form>
        </div>
      </div>
      <Footer />
  </div>
  )
}
ContactUs.propTypes = {};

ContactUs.defaultProps = {};

export default ContactUs;
