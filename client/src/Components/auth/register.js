import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./auth.css"
// import { State } from "./Context";

function Login(props) {
  let history = useHistory();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username , setUsername] = useState("")
  // const { userData, setUserData, setIsAuth } = useContext(State);
  let wrongMessageDisplay = "";
//   const notifySuccess = () =>
//     toast.success("Login Successful!", {
//       position: "top-center",
//       autoClose: 5000,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });
//   const notifyFailure = () =>
//     toast.error(`${wrongMessageDisplay}`, {
//       position: "top-center",
//       autoClose: 5000,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });

  const registerUser = async (e) => {
    e.preventDefault();
    await axios({
      method: "POST",
      data: {
        email: registerEmail,
        password: registerPassword,
        passwordCheck : confirmPassword,
        username : username
      },
      url: "http://localhost:5000/register",
    }).then((res) => {
      if (res.data.status) {
        localStorage.setItem("data", JSON.stringify(res.data.username));
        history.push("/");
        // notifySuccess();
      } else {
        wrongMessageDisplay = res.data.msg;
        history.push("/");
        // notifyFailure();
      }
    });
  };

  return (
    <div>
      <div className="authForm">
        <h1>Register</h1>
        <form onSubmit={registerUser}>
          <div className="textbox">
            <input
              id="loginUsername"
              required
              type="text"
              placeholder="Email address"
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
          </div>
          <div className="textbox">
            <input
              id="username"
              required
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="textbox">
            <input
              id="loginPassword"
              required
              type="password"
              placeholder="Password"
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
          </div>
          <div className="textbox">
            <input
              id="loginPassword"
              required
              type="password"
              placeholder="Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button className="btn">Register</button>
          <p>
            Already have an account ? <Link to="/login"><span className="ax">Log In</span></Link>
          </p>
          <p>
            Want to go back ? <Link to="/"><span className="ax">Home</span></Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;