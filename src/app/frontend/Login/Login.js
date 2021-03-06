import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.scss';
import BgImg from '../../../assets/img/petals.png'

const Login = () => (
  <div className={styles.bgImg}>

    <section className={"section mt-6"}>
      <div className="container">
        <div className="columns is-centered">
          <div className={"column box is-mobile is-5-desktop is-8-tablet p-5"}>
            <div className={styles.shadow}>

              <p className="is-size-3 is-size-4-mobile has-text-centered mb-5 mt-2"><b className={styles.letterSpacing}>Sign in</b></p>
              
              <form>
              
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input className="input" type="email" placeholder="e.g. alex@example.com" />
                  </div>
                </div>
              
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input className="input" type="password" placeholder="********" />
                  </div>
                </div>
              
                <a className="has-text-link">Forgot password?</a>

                <button className="button mt-4 is-link is-fullwidth is-size-5">Sign in</button>

                <p className="mt-4">Don't have an account?  <a className="has-text-link ml-2">Sign up</a> </p>

              </form>

            </div>

          </div>
        </div>
      </div>
    </section>

  </div>
  

);

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
