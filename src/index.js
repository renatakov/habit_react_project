import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
=======

>>>>>>> b78b72d1aebd9bd4abe9ec3e8cbcee6b5753fb41
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize/modern-normalize.css';
import './styles/_shared.scss';
import { Provider } from 'react-redux';
import s from './redux/store';
const { store } = s;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
