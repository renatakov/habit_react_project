<<<<<<< HEAD
import React, { useState } from "react";
import styles from  "./LoginPage.module.scss";
import {useDispatch} from 'react-redux';
import operations from '../../redux/auth/operations'

=======
import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import styles from './LoginPage.module.scss';
import { useDispatch } from 'react-redux';
import operations from '../../redux/auth/operations';
>>>>>>> b78b72d1aebd9bd4abe9ec3e8cbcee6b5753fb41
export default function LoginPage() {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
<<<<<<< HEAD
  const [pass, setPass] = useState("");
  const dispatch = useDispatch()

  const handlePhone = (event) => {
=======
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();
  const handlePhone = event => {
>>>>>>> b78b72d1aebd9bd4abe9ec3e8cbcee6b5753fb41
    setPhone(event.target.value);
  };
  const handlePass = event => {
    setPass(event.target.value);
<<<<<<< HEAD
  }

  const handleSubmit = event => {
    event.preventDefault();

    setSubmitted(true);
    dispatch(operations.login(phone))
    setPhone("");
  }

  return (
    <div className='loginjs'>

      <form className="form-2" onSubmit={handleSubmit}>
        {submitted ? <div className="success__message">You logged in !</div> : null}
=======
  };
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitted(true);
    dispatch(operations.login(phone));
    setPhone('');
  };
  return (
    <div className={styles.loginjs}>
      <button className={styles.btnGetback2}>&#8592; Войти</button>

      <div className={styles.header}>
        <img src={logo} className="logo1" alt="logo" />
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        {submitted ? (
          <div className="success__message">You logged in !</div>
        ) : null}

        <label htmlFor="phone" className={styles.formLabel}>
          Номер Телефона*
        </label>

>>>>>>> b78b72d1aebd9bd4abe9ec3e8cbcee6b5753fb41
        <input
          className={styles.formInput}
          id="phone"
          value={phone}
          type="tel"
          name="phone"
          onChange={handlePhone}
          required
        />
<<<<<<< HEAD
        <input value={pass} type="password" name="pass" onChange={handlePass} required/>

        {submitted && !phone ? <span>Пожалуйста введите ваш номер</span> : null}
        <button className="button-1" type="submit">
=======

        <label htmlFor="password" className={styles.formLabel}>
          Пароль*
        </label>

        <input
          className={styles.formInput}
          id="password"
          value={pass}
          type="password"
          name="pass"
          onChange={handlePass}
          required
        />

        {submitted && !phone ? <span>Пожалуйста введите ваш номер</span> : null}

        <button className={styles.btn2} type="submit">
>>>>>>> b78b72d1aebd9bd4abe9ec3e8cbcee6b5753fb41
          Дальше
        </button>
      </form>
    </div>
  );
}
