import React from 'react'
import './register.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import img from '../../images_two/register.jpg'
import {Link} from 'react-router-dom'
const Register = () => {
  return (
    <div>
      <div className='login'>
      <div className='sideImageContainer'>
        <img className='sideImage' src = {img} alt=""></img>
      </div>
      <div className='loginContent'>
            <div className='loginNav'>
                    <p>Already a Member? <span className='signUpLink'><Link className = "link"exact to = "/login" >Sign in </Link> </span></p>
            </div>
            <div className='loginAuth'>
               <h2 className='signInMessage'><b>Sign up to Memoir</b></h2>
               <fieldset className='signInfieldset'>
               <Form>
      <Form.Group className="mb-2 inputField"  controlId="formBasicEmail">
        <Form.Label className="formLabel">Username</Form.Label>
        <Form.Control type="text" className='input' placeholder="Enter username" />
        
      </Form.Group>
      <Form.Group className="mb-2"  controlId="formBasicEmail">
        <Form.Label className="formLabel" >Email</Form.Label>
        <Form.Control type="email" className='input' placeholder="Enter your email" />
        
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label className="formLabel">Password</Form.Label>
        <Form.Control className='input' type="password" placeholder="Password" />
      </Form.Group>
     
      <Button className='submitBtn' variant="primary" type="submit">
        Create Account
      </Button>
    </Form>
               </fieldset>
            </div>
      </div>
    </div>
    </div>
  )
}

export default Register
