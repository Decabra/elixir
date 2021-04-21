import React from 'react';
import styles from './Home.module.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {

return (
  <div className={styles.Home} data-testid="Home">
    <Header/>
        Home
    <Footer/>
  </div>
);
}
export default Home;
