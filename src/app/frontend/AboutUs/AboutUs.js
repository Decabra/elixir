import React from 'react';
import PropTypes from 'prop-types';
import styles from './AboutUs.module.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const AboutUs = () => (
  <div className={styles.AboutUs} data-testid="AboutUs">
      <Header/>
      AboutUs Component
      <Footer/>
  </div>
);

AboutUs.propTypes = {};

AboutUs.defaultProps = {};

export default AboutUs;
