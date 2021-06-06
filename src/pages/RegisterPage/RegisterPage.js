import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import styles from './RegisterPage.module.scss';
import { register } from '../../redux/auth/operations';
import { isAuth } from '../../redux/auth/selectors';
import { Redirect } from 'react-router-dom';

export default function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [pass, setPass] = useState('');

  const dispatch = useDispatch();

  let history = useHistory();
  // console.log(history);
  // const onRegister = user => {
  //   console.log('registered ' + user);
  // };

  const handleChange = event => {
    const { value, name } = event.target;
    // console.log(event.target.value);
    switch (name) {
      case 'firstname':
        setFirstName(value);
        return;
      case 'lastname':
        setLastName(value);
        return;
      case 'phone':
        setPhone(value);
        break;
      case 'pass':
        setPass(value);
        break;

      default:
        console.warn('Проверьте пожалуйста input');
    }
    // console.log(submitted);
  };
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
    dispatch(register(user));
    setSubmitted(true);
    setFirstName('');
    setLastName('');
    setPhone('');
    setPass('');
  };
  return (
    <div className={styles.formjs}>
      <header className={styles.header}>
        {/* <NavLink to="/">
          <button className={styles.btnGetback}>&#8592; Создать аккаунт</button>
        </NavLink> */}
        <NavLink to="/" className={styles.btnGetback}>
          &#8592; Создать аккаунт
        </NavLink>
      </header>
      {submitted & isAuth ? (
        <Redirect exact path="/user" />
      ) : (
        <form className={styles.form1} onSubmit={handleSubmit}>
          <label htmlFor="username" className={styles.formLabel1}>
            Имя*
          </label>
          <input
            className={styles.formInput1}
            value={firstName}
            name="firstname"
            type="text"
            onChange={evt => handleChange(evt)}
            placeholder="Введите ваше имя"
            required
          />

          <label htmlFor="lastname" className={styles.formLabel1}>
            Фамилия*
          </label>
          <input
            className={styles.formInput1}
            value={lastName}
            name="lastname"
            type="text"
            onChange={evt => handleChange(evt)}
            placeholder="Введите вашу фамилию"
            required
          />

          <label htmlFor="phone" className={styles.formLabel1}>
            Номер Телефона*
          </label>
          <input
            className={styles.formInput1}
            value={phone}
            name="phone"
            type="text"
            onChange={evt => handleChange(evt)}
            placeholder="Введите ваш номер "
          />

          <label htmlFor="pass" className={styles.formLabel1}>
            Пароль*
          </label>
          <input
            className={styles.formInput1}
            value={pass}
            name="pass"
            type="password"
            onChange={evt => handleChange(evt)}
            placeholder="Введите вашу фамилию"
            required
          />

          <button className={styles.btn1} type="submit">
            Дальше
          </button>
        </form>
      )}
      <footer className={styles.footer1}></footer>
    </div>
  );
}
