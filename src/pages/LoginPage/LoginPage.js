import {func} from 'prop-types';
import React, { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import "./LoginPage.module.scss";
import {useDispatch} from 'react-redux';
import waves from '../images/waves.svg';
import logo from '../images/logo.svg';
import flag from '../images/flag.svg';


export default function LoginpPage() {
  const [values, setValues] = useState({
    phone: ""
  })

  console.log(values.phone);
  

  const [submitted, setSubmitted] = useState(false);

  const handlePhone = (event) => {
    setValues({...values, phone: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setSubmitted(true);
  }


  return (
    <div className='loginjs'>
      <img src={logo}/>
      <form className="form-2" onSubmit={handleSubmit}>
        {submitted ? <div className="success__message">You logged in !</div> : null}
        <img src={flag}/>
       
        <input
          value={values.phone}
          type="tel"
          name="phone"
          
          onChange={handlePhone}
          required
        />
        
        {submitted && !values.phone ? <span>Пожалуйста введите ваш номер</span> : null}
        <button className="button-1" type="submit">
          Дальше
        </button>
      </form>
      <img className="wawes" src={waves}/>
    </div>
    )
}