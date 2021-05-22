import logo from '../../images/logo.svg'
import '../../App.css'
import s from './AuthPage.module.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'

const AuthPage = () => {
  return (
    <section className={s.authSection}>
      <header className={s.header}>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <NavLink to="/login" className={s.loginBtn}>Вход</NavLink>
      <NavLink to="/register" className={s.registerBtn}>Создать аккаунт</NavLink>
    </section>
  )
}
export default AuthPage