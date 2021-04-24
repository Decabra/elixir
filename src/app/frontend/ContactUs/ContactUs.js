import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactUs.module.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Heading from '../Heading/Heading';

const ContactUs = () => (
  <div className={styles.ContactUs} data-testid="ContactUs">
      <Header/>
      <Heading text="Elixir Support 24/7" />
      <Footer />
  </div>
);

// <div className="container">
//         <p className="is-size-4 mt-6 mb-4">How can we help?</p>
//         <form>
//           <input className="input my-2" type="email" placeholder="e.g. alex@example.com" />
//           <input className="input my-2" type="password" placeholder="********" />
//           <textarea className="textarea my-2" placeholder="10 lines of textarea" rows="10"></textarea>
//           <button className="button is-link is-pulled-right my-2 py-4 px-6">Submit</button> <br/>
//         </form>
//       </div>

ContactUs.propTypes = {};

ContactUs.defaultProps = {};

export default ContactUs;
