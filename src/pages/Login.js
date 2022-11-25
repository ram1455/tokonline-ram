import React, { useEffect } from 'react';
import  Button  from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import loginAction from '../redux/Login/loginAction';

function Login() {
  let loginState = useSelector( state => state.loginReducers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

useEffect(() => {
  console.log(loginState.email);
  console.log(loginState.password);
})

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(loginAction.login(loginState.email, loginState.password, navigate));
  }

  return (
    <div >
    <Form style={{margin:'20px 40px 10px 40px'}} onSubmit={handleLogin}>
    <h3 style={{margin:'20px 0px'}} >Login Here!</h3>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={e => dispatch(loginAction.setEmail(e.target.value))} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={e => dispatch(loginAction.setPassword(e.target.value))}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    <p style={{margin:'116px 0px 1px 0px'}}>don't have an account?</p>
    <Link to='/register'>Register</Link>
    </div>
  )
}

export default Login;