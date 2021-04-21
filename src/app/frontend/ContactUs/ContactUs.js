import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactUs.module.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ContactUs = () => (
  <div className={styles.ContactUs} data-testid="ContactUs">
      <Header/>
        ContactUs Component
      <Footer/>
  </div>
);

ContactUs.propTypes = {};

ContactUs.defaultProps = {};

export default ContactUs;
