import { func } from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import ReactDOM from 'react-dom';
// import {useHistory} from 'react-router-dom'/
import './RegisterPage.module.scss';
import operations from '../../redux/auth/operations';
import LoginPage from '../LoginPage/LoginPage';

export default function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [pass, setPass] = useState('');

  const dispatch = useDispatch();

  // let history  = useHistory();

  const onRegister = user => {
    console.log('registered ' + user);
  };

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
        return;
      case 'pass':
        setPass(value);
        return;
      default:
        console.warn('Проверьте пожалуйста input');
    }
    console.log(submitted);
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
    dispatch(operations.register(user));

    setFirstName('');
    setLastName('');
    setPhone('');
    setPass('');
  };

  return (
    <div className="formjs">
      <h1 className="yourhabit" style={{ fontSize: 50, fontWeight: 1 }}>
        Добивайтесь <br></br>поставленных целей<br></br>с помощью "YourHabit"
      </h1>
      <form className="form-1" onSubmit={evt => handleSubmit(evt)}>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
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
          <label htmlFor="lastname" className="form-label">
            Фамилия*
          </label>
          <input
            value={lastName}
            name="lastname"
            type="text"
            onChange={evt => handleChange(evt)}
            placeholder="Введите вашу фамилию"
            required
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="phone" className="form-label">
            Номер Телефона*
          </label>
          <input
            value={phone}
            name="phone"
            type="text"
            onChange={evt => handleChange(evt)}
            placeholder="Введите ваш номер "
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="pass" className="form-label">
            Пароль*
          </label>
          <input
            value={pass}
            name="pass"
            type="password"
            onChange={evt => handleChange(evt)}
            placeholder="Введите вашу фамилию"
            required
          />
        </div>

        <button className="btn-1" type="submit">
          Дальше
        </button>
      </form>
    </div>
  );
}
