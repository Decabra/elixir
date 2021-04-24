import React from 'react';
import PropTypes from 'prop-types';
import styles from './Products.module.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Heading from '../Heading/Heading';

const Products = () => (
  <div className={styles.Products} data-testid="Products">
      <Header/>
      <Heading text="Our Products" />
      <Footer/>
  </div>
);

Products.propTypes = {};

Products.defaultProps = {};

export default Products;
