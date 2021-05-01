<<<<<<< HEAD
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { func } from 'prop-types';
// import Form from './';
// import Logo from './Logo';
// import './LoginPage.module.scss';
// import waves from '../../images/desktop/';
// import logo from '../../images/logo.svg';
// import flag from '../../images/';

export default function LoginpPage() {
  const [values, setValues] = useState({
    phone: '',
  });

  // console.log(values.phone);
=======
import React, { useState } from "react";
import styles from  "./LoginPage.module.scss";
import {useDispatch} from 'react-redux';
import operations from '../../redux/auth/operations'
>>>>>>> af162f7accb04b73d86367d9198ef04935c7a62f

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [pass, setPass] = useState("");
  const dispatch = useDispatch()

<<<<<<< HEAD
  const handlePhone = event => {
    setValues({ ...values, phone: event.target.value });
  };
=======
  const handlePhone = (event) => {
    setPhone(event.target.value);
  }

  const handlePass = (event) => {
    setPass(event.target.value);
  }
>>>>>>> af162f7accb04b73d86367d9198ef04935c7a62f

  const handleSubmit = event => {
    event.preventDefault();
<<<<<<< HEAD

    setSubmitted(true);
  };

  return (
    <div className="loginjs">
      {/* <img src={logo} /> */}
      <form className="form-2" onSubmit={handleSubmit}>
        {submitted ? (
          <div className="success__message">You logged in !</div>
        ) : null}
        {/* <img src={flag} /> */}

=======
    
    setSubmitted(true);
    dispatch(operations.login(phone))
    setPhone("");
  }

  return (
    <div className='loginjs'>
  
      <form className="form-2" onSubmit={handleSubmit}>
        {submitted ? <div className="success__message">You logged in !</div> : null}  
>>>>>>> af162f7accb04b73d86367d9198ef04935c7a62f
        <input
          value={phone}
          type="tel"
          name="phone"
          onChange={handlePhone}
          required
        />
<<<<<<< HEAD

        {submitted && !values.phone ? (
          <span>Пожалуйста введите ваш номер</span>
        ) : null}
=======
        <input value={pass} type="password" name="pass" onChange={handlePass} required/>
        
        {submitted && !phone ? <span>Пожалуйста введите ваш номер</span> : null}
>>>>>>> af162f7accb04b73d86367d9198ef04935c7a62f
        <button className="button-1" type="submit">
          Дальше
        </button>
      </form>
<<<<<<< HEAD
      {/* <img className="wawes" src={waves} /> */}
=======
     
>>>>>>> af162f7accb04b73d86367d9198ef04935c7a62f
    </div>
  );
}
