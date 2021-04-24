import React from 'react';
import PropTypes from 'prop-types';
import styles from './Register.module.scss';

const Register = () => (
  <div className={styles.bgImg} data-testid="Register">
    <section className={"section mt-6"}>
      <div className="container">
        <div className="columns is-centered">
          <div className={"column box is-mobile is-5-desktop is-8-tablet p-5"}>
            <div className={styles.shadow}>

              <p className="is-size-3 is-size-4-mobile has-text-centered mb-5 mt-2"><b className={styles.letterSpacing}>Register</b></p>
              
              <form>
              
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control">
                    <input className="input" type="text" placeholder="e.g. tommy412" />
                  </div>
                </div>
              
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

                
              
                <div className="field">
                  <label className="label">Confirm Password</label>
                  <div className="control">
                    <input className="input" type="password" placeholder="********" />
                  </div>
                </div>
              
                <p className="is-size-6">I agree to the <a className="has-text-link">Terms and Conditions.</a></p>

                <button className="button mt-4 is-link is-fullwidth is-size-5">Sign up</button>

                <p className="mt-4 is-size-6">Already have an account?  <a className="has-text-link ml-2">Sign in</a> </p>

              </form>

            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
);

Register.propTypes = {};

Register.defaultProps = {};

export default Register;
