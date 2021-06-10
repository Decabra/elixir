import React, {useState} from 'react';
import styles from './Login.module.scss';

function Login(em, ps){
  
  // window.localStorage.clear();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  
  const authUser = (e) => {
    let users = JSON.parse(localStorage.getItem("userData"));
    let alreadyUser = false;
    let correctEP = false;
    e.preventDefault();
    console.log(users)
    if (users !== null){
      users.forEach((user) => {
        if (user !== null){
          if(user.Email === email){
            alreadyUser = true;
            console.log(user.Password," : ", pass);
            if(user.Password === pass){
              correctEP = true
              window.location.href ="/";
            }
          } 
        }
      })
    }         
    if(!correctEP){
      setError("Incorrect Password!");
    }
    if(!alreadyUser){
      setError("User doesn't exists. Please Signup");
    }
  }

  return(

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
                    <input className="input" type="email" placeholder="e.g. alex@example.com" onInput={(event) => setEmail(event.target.value)} required/>
                  </div>
                </div>
              
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input className="input" type="password" placeholder="********" onInput={(event) => {setPass(event.target.value)}}  required/>
                  </div>
                </div>

                <p style={{color: "red"}}>{error}</p>                
              
                <a className="has-text-link">Forgot password?</a>

                <button className="button mt-4 is-link is-fullwidth is-size-5" onClick={(e) => { authUser(e) }}>Sign in</button>

                <p className="mt-4">Don't have an account?  <a className="has-text-link ml-2" href="register">Sign up</a> </p>

              </form>

            </div>

          </div>
        </div>
      </div>
    </section>

  </div>
  
  )
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
