import React from "react";
import "./login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useRef, useContext, useState, useEffect } from "react";
import {Context} from "../../context/Context.js"
import img from "../../images_two/login.jpg";
import axios from "axios";
import { LoginStart,LoginSuccess,LoginFailure } from "../../context/Action";


const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError(true);
    }
  };
  return (
    <div className="login">
      <div className="sideImageContainer">
        <img className="sideImage" src={img} alt=""></img>
      </div>
      <div className="loginContent">
        <div className="loginNav">
          <p>
            Not a Member?{" "}
            <span className="signUpLink">
              <Link className="link" exact to="/register">
                Sign up now{" "}
              </Link>
            </span>
          </p>
        </div>
        <div className="loginAuth">
          <h2 className="signInMessage">
            <b>Sign in to Memoir</b>
          </h2>
          <fieldset className="signInfieldset">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  placeholder="Enter username"
                  ref = {userRef}
                />
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="input"
                  type="password"
                  placeholder="Password"
                  ref = {passwordRef}
                />
              </Form.Group>

              <Button className="submitBtn2" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </fieldset>
          {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
        </div>
      </div>
    </div>
  );
};

export default Login;