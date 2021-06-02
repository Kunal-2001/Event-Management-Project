import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./auth.css";
// import { State } from "./Context";

function Login(props) {
  let history = useHistory();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  // const { userData, setUserData, setIsAuth } = useContext(State);
  let wrongMessageDisplay = "";
  const notifySuccess = () =>
    toast.success("Login Successful!", {
      position: "top-center",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notifyFailure = () =>
    toast.error(`${wrongMessageDisplay}`, {
      position: "top-center",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const loginUser = async (e) => {
    e.preventDefault();
    await axios({
      method: "POST",
      data: {
        email: loginEmail,
        password: loginPassword,
      },
      url: "http://localhost:5000/login",
    }).then((res) => {
      if (res.data.status) {
        const token = res.data.token;
        localStorage.setItem("auth-token", token);
        localStorage.setItem("data", JSON.stringify(res.data.user));
        notifySuccess();
        history.push("/events");
      } else {
        wrongMessageDisplay = res.data.msg;
        notifyFailure();
      }
    });
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
      <div className="authForm">
        <h1>Login</h1>
        <form onSubmit={loginUser}>
          <div className="textbox">
            <input
              id="loginUsername"
              required
              type="text"
              placeholder="Username"
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>
          <div className="textbox">
            <input
              id="loginPassword"
              required
              type="password"
              placeholder="Password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          <button className="btn">Login</button>
          <p>
            Create a new account ?{" "}
            <Link to="/signIn">
              <span className="ax">Sign In</span>
            </Link>
          </p>
          <p>
            Want to go back ?{" "}
            <Link to="/">
              <span className="ax">Home</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
