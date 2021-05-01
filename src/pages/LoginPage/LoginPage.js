
import React, { useState } from "react";


import "./LoginPage.module.scss";
import {useDispatch} from 'react-redux';





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
  
      <form className="form-2" onSubmit={handleSubmit}>
        {submitted ? <div className="success__message">You logged in !</div> : null}
     
       
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
     
    </div>
    )
}