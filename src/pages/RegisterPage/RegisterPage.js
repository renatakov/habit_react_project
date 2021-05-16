import { func } from "prop-types";
import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import ReactDOM from 'react-dom';
import {useHistory} from 'react-router-dom'
import styles from  './RegisterPage.module.scss'
import operations from '../../redux/auth/operations'
import LoginPage from "../LoginPage/LoginPage";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [pass, setPass] = useState("")
  
  const dispatch = useDispatch();
  
  let history  = useHistory();

  const onRegister = (user) => {
    console.log("registered " + user);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    console.log(event.target.value);
    switch (name) {
      case "firstname":
        setFirstName(value);
        return;
      case "lastname":
        setLastName(value);
        return;
      case "phone":
        setPhone(value);
        case "pass":
          setPass(value);
      default:
        console.warn("Проверьте пожалуйста input");
    }
    console.log(submitted);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const user = {
      firstName,
      lastName,
      phoneNumber: phone,
      password: pass,
      height: 0,
      weight: 0,
      birthday: new Date('2021, 01, 01'),
    };
    console.log(user);
    dispatch(operations.register(user))

   setFirstName("");
   setLastName("");
   setPhone("");
   setPass("");

  };

  return (
    <div className={styles.formjs}>
      <div className={styles.header}>
        <button className={styles.btnGetback}>&#8592; Создать аккаунт</button>
      </div>
      <form className={styles.form1} onSubmit={(evt) => handleSubmit(evt)}>
        <div className="form-inputs">
        <label htmlFor='username' className={styles.formlabel1}>
          Имя*
        </label>
        <input
          value={firstName}
          name="firstname"
          type="text"
          onChange={(evt) => handleChange(evt)}
          placeholder="Введите ваше имя"
          required
        />
        </div>
        <div className="form-inputs">
          <label htmlFor='lastname' className={styles.formlabel2}>
            Фамилия*
          </label>
          <input className={styles.input1}
          value={lastName}
          name="lastname"
          type="text"
          onChange={(evt) => handleChange(evt)}
          placeholder="Введите вашу фамилию"
          required
        />
        </div>
        <div className="form-inputs">
          <label htmlFor='phone' className={styles.formlabel3}>
            Номер Телефона*
          </label>
           <input className={styles.input1}
          value={phone}
          name="phone"
          type="text"
          onChange={(evt) => handleChange(evt)}
          placeholder="Введите ваш номер "
        />
        </div>
        <div className="form-inputs">
          <label htmlFor='pass' className={styles.formlabel4}>
            Пароль*
          </label>
          <input className={styles.input1}
          value={pass}
          name="pass"
          type="password"
          onChange={(evt) => handleChange(evt)}
          placeholder="Введите вашу фамилию"
          required
        />
        </div>
      
        <button className={styles.btn1} type="submit">Дальше</button>
      </form>
     <div className={styles.footer1}></div>
     
      
    </div>
  );
}