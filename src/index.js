import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
=======



>>>>>>> af162f7accb04b73d86367d9198ef04935c7a62f
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
  </Provider>, document.getElementById('root'),
);
