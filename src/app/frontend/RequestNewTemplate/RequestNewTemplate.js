import React from 'react';
import PropTypes from 'prop-types';
import styles from './RequestNewTemplate.module.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Heading from '../Heading/Heading';

const RequestNewTemplate = () => (
  <div className={styles.RequestNewTemplate} data-testid="RequestNewTemplate">
      <Header/>
      <Heading text="Want Unique Design?" />
      <Footer/>
  </div>
);

RequestNewTemplate.propTypes = {};

RequestNewTemplate.defaultProps = {};

export default RequestNewTemplate;
