import React from 'react';
import PropTypes from 'prop-types';
import styles from './RequestNewTemplate.module.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const RequestNewTemplate = () => (
  <div className={styles.RequestNewTemplate} data-testid="RequestNewTemplate">
      <Header/>
      Hamza Component
      <Footer/>
  </div>
);

RequestNewTemplate.propTypes = {};

RequestNewTemplate.defaultProps = {};

export default RequestNewTemplate;
