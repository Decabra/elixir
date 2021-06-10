import React,{useState} from 'react';
import styles from './Register.module.scss';

function Register(){
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("userData")))
  const [trueEmail, setTrueEmail] = useState(false);
  const [truePass, setTruePass] = useState(false);
  const [trueMatchPass, setTrueMatchPass] = useState(false);

  const checkPassword = (event) =>{
    var val = event.target.value;
    var passwPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if(val.match(passwPattern)) { 
      setTruePass(true);
      setError("");
      setPass(val);
      if(trueEmail && trueMatchPass){
        setIsDisabled(false);
      }else{
        setIsDisabled(true);
      }
    }
    else{
      setError("Password should be atleast 8 characters long and should container 1 digit, 1 uppercase and 1 lowercase letter")
      setPass("");
      setTruePass(false);
      setIsDisabled(true);
    }
  }

  const matchPassword = (event) => {
    var val = event.target.value;
    if (pass === val){
      setError("");
      setTrueMatchPass(true)
      if(trueEmail && truePass){
        setIsDisabled(false);
      }else{
        setIsDisabled(true);
      }
    }
    else{
      setError("Passwords didn't matched!");
      setTrueMatchPass(false);
      setIsDisabled(true);
    }
  }

  const onEmailChange = (event) => {
    setEmail(event.target.value);
    if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
      setError("");
      setTrueEmail(true);
      if(trueMatchPass && truePass){
        setIsDisabled(false);
      }
      else{
        setIsDisabled(true);
      }
    }
    else{
      setError("Incorrect Email!");
      setTrueEmail(false);
      setIsDisabled(true);
    }
  }

  const registerUser = (e) =>{
    let us = {Email: email, Password: pass}; 
    let userData = users;
    let alreadyUser = false;
    e.preventDefault();
    console.log(userData)
    if(userData !== null){
      userData.forEach((u) => {
        if(u !== null && u !== undefined){
          if(u.Email === email){
            setError("User already exists. Please Sign in");
            alreadyUser = true
          } 
        }
      });
    }
    if(!alreadyUser){
      userData = userData == null ? [] : userData;
      userData.push(us);
      localStorage.setItem("userData", JSON.stringify(userData));
      e.preventDefault();
      window.location.href='login';  
    }
    
  }

  return(
    <div className={styles.bgImg} data-testid="Register">
      <section className={"section mt-4"}>
        <div className="container">
          <div className="columns is-centered">
            <div className={"column box is-mobile is-5-desktop is-8-tablet p-5"}>
              <div className={styles.shadow}>

                <p className="is-size-3 is-size-4-mobile has-text-centered mb-5 mt-2"><b className={styles.letterSpacing}>Register</b></p>
                
                <form>
                
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input className="input" type="text"  placeholder="e.g. alex@example.com" onChange={onEmailChange} />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                      <input className="input" type="password" placeholder="********" onChange={checkPassword} />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Confirm Password</label>
                    <div className="control">
                      <input className="input" type="password" placeholder="********" onChange={matchPassword} />
                    </div>
                  </div>

                  <p style={{color:"red"}}> {error} </p> <br />  


                  <p className="is-size-6">I agree to the <a className="has-text-link">Terms and Conditions.</a></p>
                  
                  <button className="button mt-4 is-link is-fullwidth is-size-5" disabled={isDisabled} onClick={ (e) => registerUser(e) } >Sign up</button>

                  <p className="mt-4 is-size-6">Already have an account?  <a className="has-text-link ml-2" href="login">Sign in</a> </p>

                </form>

              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
Register.propTypes = {};

Register.defaultProps = {};

export default Register;
