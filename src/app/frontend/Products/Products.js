import React from 'react';
import PropTypes from 'prop-types';
import styles from './Products.module.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Heading from '../Heading/Heading';
import Card from './Card';
import Engineering from '../../../assets/img/engineering.png';
import Stars from '../../../assets/img/stars.png';

const Products = () => {
  return(
  <div className={styles.Products} data-testid="Products">
      <Header/>
      <Heading text="Our Products" />
      <div className="container">
        <div className={styles.searchbBarMargin}>
          <div className="is-flex mt-5">
            <input className="input mr-2" type="text" placeholder="Type to search (e.g., Art)" />
            <button className="button is-link">Search</button>
          </div>
          <div className={`is-flex mt-6 mb-4 ${styles.mlauto}`}>
            <p className={`mt-1 is-size-5-tablet is-size-6-mobile ${styles.orange} ${styles.m}`}>Filter by: </p>
            <div className={`is-flex flex-wrap `}>
              <button className={`button is-outlied ${styles.btnBorder} ${styles.btnHover} is-size-6-tablet is-size-7-mobile mr-4`}>Top Rated</button>
              <button className={`button is-outlied ${styles.btnBorder} ${styles.btnHover} is-size-6-tablet is-size-7-mobile mr-4`}>Latest</button>
              <button className={`button is-outlied ${styles.btnBorder} ${styles.btnHover} is-size-6-tablet is-size-7-mobile`}>Price</button>
            </div>
          </div>
        </div>
        <div className="container is-flex flex-wrap is-justify-content-space-evenly">
          <Card url={Engineering} alt="Engineering" name="Zapmata" desc="Online Engineering Tool" rating={Stars} userRated="536" cost="$54"/>
          <Card url={Engineering} alt="Engineering" name="Jevelin" desc="Online Engineering Tool" rating={Stars} userRated="536" cost="$62" />
          <Card url={Engineering} alt="Engineering" name="Sajkl" desc="Online Engineering Tool" rating={Stars} userRated="536" cost="$35" />
          <Card url={Engineering} alt="Engineering" name="Najjk" desc="Online Engineering Tool" rating={Stars} userRated="536" cost="$54"/>
          <Card url={Engineering} alt="Engineering" name="Uouo" desc="Online Engineering Tool" rating={Stars} userRated="536" cost="$62" />
          <Card url={Engineering} alt="Engineering" name="fdsfsfew" desc="Online Engineering Tool" rating={Stars} userRated="536" cost="$35" />
          <Card url={Engineering} alt="Engineering" name="retr" desc="Online Engineering Tool" rating={Stars} userRated="536" cost="$54"/>
          <Card url={Engineering} alt="Engineering" name="dsarew" desc="Online Engineering Tool" rating={Stars} userRated="536" cost="$62" />
          <Card url={Engineering} alt="Engineering" name="gdqwe" desc="Online Engineering Tool" rating={Stars} userRated="536" cost="$35" />
        </div>
      </div>
      <Footer/>
  </div>
  )
};

Products.propTypes = {};

Products.defaultProps = {};

export default Products;
