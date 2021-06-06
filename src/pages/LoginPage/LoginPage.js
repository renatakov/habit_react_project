import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import styles from './LoginPage.module.scss';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { NavLink } from 'react-router-dom';

export default function LoginPage() {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();

  const handlePhone = event => {
    setPhone(event.target.value);
  };

  const handlePass = event => {
    setPass(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitted(true);
    dispatch(login(phone));
    setPhone('');
  };

  return (
    <div className={styles.loginjs}>
      <NavLink to="/">
        <button className={styles.btnGetback2}>&#8592; Войти</button>
      </NavLink>
      <div className={styles.header}>
        <img src={logo} className="logo1" alt="logo" />
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* {submitted ? (
          <div className="success__message">You logged in !</div>
        ) : null} */}
        <label htmlFor="phone" className={styles.formLabel}>
          Номер Телефона*
        </label>
        <input
          className={styles.formInput}
          id="phone"
          value={phone}
          type="tel"
          name="phone"
          onChange={handlePhone}
          required
        />

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

        {submitted && !phone ? (
          <span className={styles.warning}>Пожалуйста введите ваш номер</span>
        ) : null}

        <button className={styles.btn2} type="submit">
          Дальше
        </button>
        <footer className="footer2"></footer>
      </form>
    </div>
  );
}
