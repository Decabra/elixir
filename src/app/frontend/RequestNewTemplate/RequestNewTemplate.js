import React from 'react';
import styles from './RequestNewTemplate.module.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Heading from '../Heading/Heading';

const RequestNewTemplate= () => (
  <div className={styles.RequestNewTemplate} data-testid="RequestNewTemplate">
      <Header/>
      <Heading text="Want Unique Design?" />
      <main className="mt-6">
          <section className="columns is-justify-content-center px-6">
              <div className={`${styles.reqTempColor} column is-8-desktop box is-10-tablet is-12-mobile p-6 has-text-justified`}>
                  <div className="has-text-weight-semibold is-size-4 pb-6">
                      Available Method
                  </div>
                  <div className="is-size-5 pb-6">
                          If you would like to request custom template of your
                          own choice and specification. Please drop us an email
                          at order@elixir.com or you can contact at this WhatsApp
                          number +1 456 789 1212.


                  </div>
              </div>

          </section>
      </main>
      <Footer/>
  </div>
);

export default RequestNewTemplate;
