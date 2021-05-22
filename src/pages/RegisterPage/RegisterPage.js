<<<<<<< HEAD
import { func } from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import ReactDOM from 'react-dom';
// import {useHistory} from 'react-router-dom'/
import './RegisterPage.module.scss';
import operations from '../../redux/auth/operations';
import LoginPage from '../LoginPage/LoginPage';

=======
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import styles from './RegisterPage.module.scss';
import operations from '../../redux/auth/operations';
import LoginPage from '../LoginPage/LoginPage';
>>>>>>> b78b72d1aebd9bd4abe9ec3e8cbcee6b5753fb41
export default function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [pass, setPass] = useState('');
<<<<<<< HEAD

  const dispatch = useDispatch();

  // let history  = useHistory();

  const onRegister = user => {
    console.log('registered ' + user);
  };

=======
  const dispatch = useDispatch();
  let history = useHistory();
  const onRegister = user => {
    console.log('registered ' + user);
  };
>>>>>>> b78b72d1aebd9bd4abe9ec3e8cbcee6b5753fb41
  const handleChange = event => {
    const { value, name } = event.target;
    console.log(event.target.value);
    switch (name) {
      case 'firstname':
        setFirstName(value);
        return;
      case 'lastname':
        setLastName(value);
        return;
      case 'phone':
        setPhone(value);
<<<<<<< HEAD
        return;
      case 'pass':
        setPass(value);
        return;
=======
      case 'pass':
        setPass(value);
>>>>>>> b78b72d1aebd9bd4abe9ec3e8cbcee6b5753fb41
      default:
        console.warn('Проверьте пожалуйста input');
    }
    console.log(submitted);
  };
<<<<<<< HEAD

=======
>>>>>>> b78b72d1aebd9bd4abe9ec3e8cbcee6b5753fb41
  const handleSubmit = evt => {
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
    dispatch(operations.register(user));
<<<<<<< HEAD

=======
>>>>>>> b78b72d1aebd9bd4abe9ec3e8cbcee6b5753fb41
    setFirstName('');
    setLastName('');
    setPhone('');
    setPass('');
  };
  return (
<<<<<<< HEAD
    <div className="formjs">
      <h1 className="yourhabit" style={{ fontSize: 50, fontWeight: 1 }}>
        Добивайтесь <br></br>поставленных целей<br></br>с помощью "YourHabit"
      </h1>
      <form className="form-1" onSubmit={evt => handleSubmit(evt)}>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
=======
    <div className={styles.formjs}>
      <div className={styles.header}>
        <button className={styles.btnGetback}>&#8592; Создать аккаунт</button>
      </div>
      <form className={styles.form1} onSubmit={evt => handleSubmit(evt)}>
        <div className="form-inputs">
          <label htmlFor="username" className={styles.formlabel1}>
>>>>>>> b78b72d1aebd9bd4abe9ec3e8cbcee6b5753fb41
            Имя*
          </label>
          <input
            value={firstName}
            name="firstname"
            type="text"
            onChange={evt => handleChange(evt)}
            placeholder="Введите ваше имя"
            required
          />
        </div>
        <div className="form-inputs">
<<<<<<< HEAD
          <label htmlFor="lastname" className="form-label">
            Фамилия*
          </label>
          <input
=======
          <label htmlFor="lastname" className={styles.formlabel2}>
            Фамилия*
          </label>
          <input
            className={styles.input1}
>>>>>>> b78b72d1aebd9bd4abe9ec3e8cbcee6b5753fb41
            value={lastName}
            name="lastname"
            type="text"
            onChange={evt => handleChange(evt)}
            placeholder="Введите вашу фамилию"
            required
          />
        </div>
        <div className="form-inputs">
<<<<<<< HEAD
          <label htmlFor="phone" className="form-label">
            Номер Телефона*
          </label>
          <input
=======
          <label htmlFor="phone" className={styles.formlabel3}>
            Номер Телефона*
          </label>
          <input
            className={styles.input1}
>>>>>>> b78b72d1aebd9bd4abe9ec3e8cbcee6b5753fb41
            value={phone}
            name="phone"
            type="text"
            onChange={evt => handleChange(evt)}
            placeholder="Введите ваш номер "
          />
        </div>
        <div className="form-inputs">
<<<<<<< HEAD
          <label htmlFor="pass" className="form-label">
            Пароль*
          </label>
          <input
=======
          <label htmlFor="pass" className={styles.formlabel4}>
            Пароль*
          </label>
          <input
            className={styles.input1}
>>>>>>> b78b72d1aebd9bd4abe9ec3e8cbcee6b5753fb41
            value={pass}
            name="pass"
            type="password"
            onChange={evt => handleChange(evt)}
            placeholder="Введите вашу фамилию"
            required
          />
        </div>
<<<<<<< HEAD

        <button className="btn-1" type="submit">
          Дальше
        </button>
      </form>
=======
        <button className={styles.btn1} type="submit">
          Дальше
        </button>
      </form>
      <div className={styles.footer1}></div>
>>>>>>> b78b72d1aebd9bd4abe9ec3e8cbcee6b5753fb41
    </div>
  );
}
