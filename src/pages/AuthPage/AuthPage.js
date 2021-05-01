import React, { Component } from 'react';
import s from './AuthPage.module.scss';

import { connect } from 'react-redux';
import operations from '../../redux/auth/operations';

class AuthPage extends Component {
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // const { firstName, lastName, phoneNumber, password } = this.state;
    // const user = {
    //   firstName,
    //   lastName,
    //   phoneNumber,
    //   password,
    // };

    const user = {
      phoneNumber: '0934478779',
      password: 'qwer1234',
      firstName: 'root',
      lastName: 'root',
      height: 0,
      weight: 0,
      birthday: new Date('2021, 01, 01'),
    };

    this.props.onRegister(user);
    console.log(user);
  };
  render() {
    return (
      <section className={s.authSection}>
        <h1>AuthPage</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="firstName" onChange={this.handleChange} />
          <input type="text" name="lastName" onChange={this.handleChange} />
          <input type="text" name="phoneNumber" onChange={this.handleChange} />
          <input type="password" name="password" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  state: state,
});

const mapDispatchToProps = dispatch => ({
  onRegister: value => dispatch(operations.register(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
