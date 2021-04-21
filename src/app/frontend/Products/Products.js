import React from 'react';
import PropTypes from 'prop-types';
import styles from './Products.module.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Products = () => (
  <div className={styles.Products} data-testid="Products">
      <Header/>
          Products Component
      <Footer/>
  </div>
);

Products.propTypes = {};

Products.defaultProps = {};

export default Products;
