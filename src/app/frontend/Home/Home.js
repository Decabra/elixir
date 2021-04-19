import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.scss';

const Home = () => (
  <div className={styles.Home} data-testid="Home">
      <main>
          {/*<section className="sec-1">
            <header className="columns is-justify-content-flex-end m-0 pl-3 pt-3">
                <div className="nav-menu-icon is-hidden-tablet pb-3">
                    <i (click)="toggleMenu()" class="pi pi-align-justify is-size-2" ></i>
            </div>
            <nav
            [ngClass]="{'is-hidden-mobile': menuState}" class="columns column is-8-desktop is-12-tablet has-text-centered-tablet is-align-items-flex-end p-pb-md-6 p-pr-md-6 has-text-weight-semibold">
                <a *ngFor="let anchor of anchorData" routerLink="{{anchor.routeLink}}" class="column {{anchor.extraClasses}}">{{anchor.name}}</a>
            </nav>
        </header>
        <div class="has-text-centered mt-6 px-6 pt-6">
    <span class="home-caption is-size-2-tablet is-size-3-mobile has-text-weight-bold">
      YOU SPEND YOU EARN
    </span>
        </div>
    </section>
    <section class="sec-2 px-6 m-0 columns is-flex-direction-column">
        <div class="is-12 column has-text-centered mt-6 is-size-1">
            <h1 class="has-text-weight-bold">How it works</h1>
        </div>
        <div class="columns is-12 column pt-6 mt-6 is-justify-content-space-evenly">
            <div class="columns column is-3 is-align-items-center is-flex-direction-column">
                <div class="">
                    <img  class="rep-icons"  src="../../../assets/adapt/img/shop-icon.png">
                </div>
                <div class="column is-12 is-justify-content-center is-align-items-center is-flex">
                    <img src="../../../assets/adapt/img/num-1.png">
                    <span class="pl-2 has-text-weight-semibold ">Search Shop</span>
                </div>
            </div>
            <div class="columns column is-3 is-align-items-center is-flex-direction-column">
                <div class="">
                    <img  class="rep-icons"  src="../../../assets/adapt/img/cash-icon.png">
                </div>
                <div class="column is-12 is-justify-content-center is-align-items-center is-flex">
                    <img  src="../../../assets/adapt/img/num-2.png">
                    <span class="pl-2 has-text-weight-semibold ">Pay through Alpha</span>
                </div>
            </div>
            <div class="columns column is-3 is-align-items-center is-flex-direction-column">
                <div class="">
                    <img  class="rep-icons"  src="../../../assets/adapt/img/coin-icon.png">
                </div>
                <div class="column is-12 is-justify-content-center is-align-items-center is-flex">
                    <img src="../../../assets/adapt/img/num-3.png">
                    <span class="pl-2 has-text-weight-semibold ">Earn coin on each spending</span>
                </div>
            </div>
        </div>
    </section>
    <section style="height: auto; padding-bottom: 11.5rem" class="sec-3 px-6 m-0 is-relative columns is-flex-direction-column">
        <div class="is-12 column has-text-centered mt-6 is-size-1">
            <h1 class="has-text-weight-bold">Benefits</h1>
        </div>
        <div class="columns is-12 column mt-6 is-justify-content-flex-start">
            <div class="column is-2"></div>
            <div class="columns column is-10 is-flex-direction-column">
                <div class="">
                    <img  class="rep-icons"  src="../../../assets/adapt/img/hat-icon.png">
                </div>
                <div class="column pt-0 is-12">
                    <h3 class="has-text-weight-semibold is-size-3">As Vendor</h3>
                    <p>
                        Do you have a shop or store?<br>
                        When you will add the shop you will get an account no.<br>
                        You can use that account no to receive payments.<br>
                        Your shop will be added in our network.<br>
                        You will be getting sales through our network.
                    </p>
                </div>
            </div>
        </div>
        <div class="columns is-12 column pt-6 mt-6 is-justify-content-flex-end">
            <div class="columns column is-7 pt-6 is-flex-direction-column">
                <div class="column pt-5 is-12">
                    <h3 class="has-text-weight-semibold is-size-3">As Networker</h3>
                    <p class="netwrk-p mt-4">
                        Do you have a team and Network?<br>
                        Motivate your team to join the Alpha pay through the refer link.<br>
                        Get coins when a single person will join your networker.<br>
                        Do you have social media groups?<br>
                        Even if no one joins through the refer link. Sharing us on social media<br>
                        will give you a chance to earn per 1000 unique views through the link.<br>
                        You will have to share the group link where you have shared the refer link.<br>
                        Do you want to earn commission referring a shop?<br>
                        We will give you the opportunity to earn coins<br>
                        when you will refer each single shop.<br>
                    </p>
                </div>
            </div>
        </div>
        <div class="vector-img">
            <img  src="../../../assets/adapt/img/vector.png">
        </div>
    </section>
    <section class="sec-4 columns m-0 px-6 mt-6 is-flex-direction-column">
        <div class="columns is-12 column mb-6 pb-6 is-flex-direction-column is-align-items-flex-end">
            <div class="column has-text-right has-text-right-desktop pt-6 is-12">
                <h3 class="has-text-weight-semibold is-size-3">Our coin has real value</h3>
                <p class="mt-4">
                    Yeah! you can turn your coin in real money, you can take withdraw directly in your bank account.<br>
                    You can use those coins to promote your shop as well.
                </p>
            </div>
        </div>

        <div class="columns is-12 column mt-6 pt-6 pl-6 is-justify-content-flex-start">
            <div class="column pl-6 pt-0 is-12">
                <h3 class="has-text-weight-semibold is-size-3">Promotion & Rewards</h3>
                <p class="mt-4">
                    We are giving you the opportunity to increase your network and get promotion.<br>
                    Once your rank gets promoted, you will earn more commission and rewards.
                </p>
            </div>
        </div>
    </section>
    <section class="sec-5 px-6 m-0">
        <div class="columns is-12 column pl-6 pt-6 m-o is-flex-direction-column">
            <div class="column pl-6 pt-6 is-12">
                <h3 class="has-text-weight-semibold is-size-3">Hey! I am not charging anything to join me</h3>
                <p class="mt-4">
                    You can join me anytime, as I will not charge you to start getting network benefits.<br>
                    I am not charging any fee if you will spend money using me.<br><br>
                    It’s free to join me now.
                </p>
                <div class="buttons pt-3">
                    <button class="button is-link">Sign up for free</button>
                </div>
            </div>

        </div>
    </section>
    <section style="height: auto; margin-top: -1px;" class="sec-6 p-6">
        <div  class="pl-6">
            <div class="pl-6">
                <div class="column is-4 is-flex is-flex-direction-column">
                    <span class="footer-logo has-text-weight-bold is-size-2 py-4">Alpha Pay</span>
                    <a href="">Terms & Condition</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Help Center</a>
                    <a href="">Disclaimers</a>
                </div>
                <div></div>
                <div class="pt-5 has-text-centered">All right reserved. 2021 Alpha Pay</div>
            </div>
        </div>
    </section>*/}
      </main>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
