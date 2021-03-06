import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { loginUser, userData, } from "../userSlice";
import { Button } from 'react-bootstrap';

import './Login.scss';

const Login = () => {

  const [credentials, setCredentials] = useState({ client_number: '', password: '' });

  const [msgError, setMsgError] = useState("");

  const dispatch = useDispatch();

  const identification = useSelector(userData);

  let navigate = useNavigate()
  

  const updateCredentials = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  useEffect(() => {

    if (identification?.token !== '') {
      setTimeout(() => {
        navigate("/");

      }, 200)
    };
  });

  const log = () => {

    if (credentials.password.length > 5) {

      if (! /[\d()+-]/g.test(credentials.password)) {
        setMsgError('Wrong password');
        return;
      };

    } else {
      setMsgError('Password must be at least 6 characters long');
      return;
    }

    setMsgError("");

    dispatch(loginUser({
      client_number: credentials.client_number,
      password: credentials.password
    }
    ));
  };

  return (
    <div className='loginDesign'>

      {/* <pre>{JSON.stringify(credentials, null, 2)}</pre> */}
      <input type='text' name='client_number' title='client_number' placeholder='Client number' onChange={updateCredentials} lenght='30' />
      <input type='password' name='password' title='password' placeholder='Password' onChange={updateCredentials} lenght='30' />
      <Button variant="primary" className="loginButton" onClick={() => log()}>Login</Button>
      <div className='error'>{msgError}</div>
      
    </div>
  )
}

export default Login;
