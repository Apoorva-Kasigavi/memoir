import React from 'react'
import './register.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import img from '../../images_two/register.jpg'
const Register = () => {
  return (
    <div>
      <div className='login'>
      <div className='sideImageContainer'>
        <img className='sideImage' src = {img} alt=""></img>
      </div>
      <div className='loginContent'>
            <div className='loginNav'>
                    <p>Already a Member? <span className='signUpLink'>Sign in </span></p>
            </div>
            <div className='loginAuth'>
               <h2 className='signInMessage'><b>Sign up to Memoir</b></h2>
               <fieldset className='signInfieldset'>
               <Form>
      <Form.Group className="mb-2"  controlId="formBasicEmail">
        <Form.Label >Username</Form.Label>
        <Form.Control type="text" className='input' placeholder="Enter username" />
        
      </Form.Group>
      <Form.Group className="mb-2"  controlId="formBasicEmail">
        <Form.Label >Email</Form.Label>
        <Form.Control type="email" className='input' placeholder="Enter your email" />
        
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className='input' type="password" placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
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
