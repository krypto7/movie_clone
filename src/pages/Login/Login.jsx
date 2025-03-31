import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
function Login() {
  const [signState, setSignState] = useState("Sing In");

  return (
    <div className="login">
      <div className="login_logo">
        <img src={logo} alt="" srcset="" />
      </div>
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input type="text" placeholder="Your Name" />
          ) : (
            <></>
          )}

          <input type="email" placeholder="Your email" />
          <input type="Password" placeholder="Your Password" />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember-div">
              <input type="checkbox" className="remember" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sign Up now
              </span>
            </p>
          ) : (
            <p>
              already have an account?{" "}
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sign in now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
