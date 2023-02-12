import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginRegister() {
  const [errorState, setErrorState] = React.useState({
    login: "",
    register: "",
  });

  const navigate = useNavigate();

  const [loginState, setLoginState] = React.useState({
    email: "",
    password: "",
  });
  return (
    <div className="login-comp">
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (
                loginState.email === "demo@coralmango.com" &&
                loginState.password === "demo123"
              ) {
                localStorage.setItem("token", 1);
                navigate("/preview");
              } else {
                setErrorState({
                  login: "Invalid Credentials Provided",
                });
              }
            }}
          >
            <h1>Sign in</h1>
            {errorState.login && (
              <span
                style={{
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                Error! {errorState.login}
              </span>
            )}
            <input
              type="email"
              placeholder="Email"
              value={loginState.email}
              onChange={(e) => {
                setLoginState({
                  ...loginState,
                  email: e.target.value,
                });
                setErrorState({
                  login: "",
                  register: "",
                });
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={loginState.password}
              onChange={(e) => {
                setLoginState({
                  ...loginState,
                  password: e.target.value,
                });

                setErrorState({
                  login: "",
                  register: "",
                });
              }}
            />
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>
                Use this credentials for login <br /> ( Email:
                <b> demo@coralmango.com</b> & password: <b>demo123</b> )
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
