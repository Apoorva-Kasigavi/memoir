import React from "react";
import "./register.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import img from "../../images_two/register.jpg";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      <div className="login">
        <div className="sideImageContainer">
          <img className="sideImage" src={img} alt=""></img>
        </div>
        <div className="loginContent">
          <div className="loginNav">
            <p>
              Already a Member?{" "}
              <span className="signUpLink">
                <Link className="link" exact to="/login">
                  Sign in{" "}
                </Link>{" "}
              </span>
            </p>
          </div>
          <div className="loginAuth">
            <h2 className="signInMessage">
              <b>Sign up to Memoir</b>
            </h2>
            <fieldset className="signInfieldset">
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-2 inputField"
                  controlId="formBasicUsername"
                >
                  <Form.Label className="formLabel">Username</Form.Label>
                  <Form.Control
                    type="text"
                    className="input"
                    placeholder="Enter username"
                    onChange = {(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label className="formLabel">Email</Form.Label>
                  <Form.Control
                    type="email"
                    className="input"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Label className="formLabel">Password</Form.Label>
                  <Form.Control
                    className="input"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button className="submitBtn" variant="primary" type="submit">
                  Create Account
                </Button>
              </Form>
            </fieldset>
            {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
