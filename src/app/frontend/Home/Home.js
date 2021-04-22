import React from 'react';
import styles from './Home.module.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import puzzle from '../../../assets/img/puzzle.jpg'
import engineering from '../../../assets/img/engineering.png'
import art from '../../../assets/img/art.png'
import ecommerce from '../../../assets/img/ecommerce.png'
const Home = () => {

    let catCards = [
        {name:"Engineering", tag:"Everything you need",imgPath:engineering},
        {name:"eCommerce", tag:"Complete store",imgPath:art},
        {name:"Art & design", tag:"Beautiful templates",imgPath:ecommerce},
    ];
    return (
        <div className={"p-1"} data-testid="Home">
            <Header/>
            <main>
                <section>
                    <div className="columns is-flex-wrap-wrap">
                        <div className="column is-12"></div>
                        <div className="column is-12-mobile is-flex is-align-items-center is-justify-content-center is-size-3-mobile is-size-4-tablet is-size-2-widescreen is-size-3-desktop has-text-weight-semibold">
                            <div className="has-text-black has-text-centered-mobile">
                                Awesome web templates for <br/>your business
                            </div>
                        </div>
                        <div className="column is-flex is-justify-content-center is-align-items-center">
                            <img className={styles.puzzleImg} src={puzzle}/>
                        </div>
                    </div>
                </section>
                <section className="pt-6">
                    <div className="pt-6 px-5">
                        <div className="columns pt-5 is-12 is-size-2 is-size-3-mobile has-text-weight-semibold">
                            <div className="column has-text-black has-text-centered">
                                Categories
                            </div>
                        </div>
                        <div className="columns is-flex-wrap-wrap is-justify-content-space-around">
                            {
                                catCards.map(({name, tag, imgPath}, index) => (
                                    <div key={index} className="columns column box is-flex-wrap-wrap is-3-desktop is-8 m-0 mt-6 pt-3 pb-6">
                                        <div className="column is-12 has-text-centered has-text-black ">
                                            <div className="is-size-3-mobile is-size-4-tablet is-size-4-desktop is-size-3-widescreen has-text-weight-semibold py-3">{name}</div>
                                            <div className="is-size-6">{tag}</div>
                                        </div>
                                        <div className="column is-12 pt-6 has-text-centered">
                                            <img src={imgPath} alt=""/>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}
export default Home;
