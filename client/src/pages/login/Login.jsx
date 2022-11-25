import React from 'react'
import './login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import img from '../../images_two/login.jpg'
const Login = () => {
  return (
    <div className='login'>
      <div className='sideImageContainer'>
        <img className='sideImage' src = {img} alt=""></img>
      </div>
      <div className='loginContent'>
            <div className='loginNav'>
                    <p>Not a Member? <span className='signUpLink'>Sign up now </span></p>
            </div>
            <div className='loginAuth'>
               <h2 className='signInMessage'><b>Sign in to Memoir</b></h2>
               <fieldset className='signInfieldset'>
               <Form>
      <Form.Group className="mb-2"  controlId="formBasicEmail">
        <Form.Label >Username</Form.Label>
        <Form.Control type="text" className='input' placeholder="Enter username" />
        
      </Form.Group>
      
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className='input' type="password" placeholder="Password" />
      </Form.Group>
     
      <Button className='submitBtn2'variant="primary" type="submit">
        Submit
      </Button>
    </Form>
               </fieldset>
            </div>
      </div>
    </div>
  )
}

export default Login
