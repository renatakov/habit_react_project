import React, { useState } from "react";
import logo from '../../images/logo.svg'
import styles from  "./LoginPage.module.scss";
import {useDispatch} from 'react-redux';
import operations from '../../redux/auth/operations'

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [pass, setPass] = useState("");
  const dispatch = useDispatch()

  const handlePhone = (event) => {
    setPhone(event.target.value);
  }

  const handlePass = (event) => {
    setPass(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setSubmitted(true);
    dispatch(operations.login(phone))
    setPhone("");
  }

  return (
    <div className='loginjs'>
    <div className="header">
    <img src={logo} className="logo1" alt="logo"/>
    </div>
      <form className="form-2" onSubmit={handleSubmit}>
        {submitted ? <div className="success__message">You logged in !</div> : null}
        <div className="form-inputs2">
          <label htmlFor='phone' className="form-label2">Номер Телефона*</label>
          </div>          
        <input
          value={phone}
          type="tel"
          name="phone"
          
          onChange={handlePhone}
          required
        />
        <div className="form-inputs2">
          <label htmlFor='password' className="form-label2">Пароль*</label>
        </div>
        <input value={pass} type="password" name="pass" onChange={handlePass} required/>
        
        {submitted && !phone ? <span>Пожалуйста введите ваш номер</span> : null}
        <button className="button-1" type="submit">
          Дальше
        </button>
      </form>
      <div className={styles.footer}></div>
    
    </div>
    )
}