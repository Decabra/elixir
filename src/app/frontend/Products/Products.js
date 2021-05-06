import React from 'react';
import PropTypes from 'prop-types';
import styles from './Products.module.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Heading from '../Heading/Heading';
import Card from './Card';
import Engineering from '../../../assets/img/engineering.png';
import Stars from '../../../assets/img/stars.png';


const Products = () => (
  <div className={styles.Products} data-testid="Products">
      <Header/>
      <Heading text="Our Products" />
      <div className="container is-flex flex-wrap is-justify-content-space-evenly">
        <Card url={Engineering} alt="Engineering" name="Zapmata" desc="Online Engineering Tool" rating={Stars} userRated="536" cost="$54"/>
        <Card url={Engineering} alt="Engineering" name="Zapmata" desc="Online Engineering Tool" rating={Stars} userRated="536" cost="$62" />
        <Card url={Engineering} alt="Engineering" name="Zapmata" desc="Online Engineering Tool" rating={Stars} userRated="536" cost="$35" />
        <Card url={Engineering} alt="Engineering" name="Zapmata" desc="Online Engineering Tool" rating={Stars} userRated="536" cost="$54"/>
        <Card url={Engineering} alt="Engineering" name="Zapmata" desc="Online Engineering Tool" rating={Stars} userRated="536" cost="$62" />
        <Card url={Engineering} alt="Engineering" name="Zapmata" desc="Online Engineering Tool" rating={Stars} userRated="536" cost="$35" />
        <Card url={Engineering} alt="Engineering" name="Zapmata" desc="Online Engineering Tool" rating={Stars} userRated="536" cost="$54"/>
        <Card url={Engineering} alt="Engineering" name="Zapmata" desc="Online Engineering Tool" rating={Stars} userRated="536" cost="$62" />
        <Card url={Engineering} alt="Engineering" name="Zapmata" desc="Online Engineering Tool" rating={Stars} userRated="536" cost="$35" />
      </div>
      <Footer/>
  </div>
);

Products.propTypes = {};

Products.defaultProps = {};

export default Products;
