import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './scenes/App';
import * as serviceWorker from './serviceWorker';
import './scss/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const el = document.getElementById('react-root')

const start = () => {
  el &&
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      el,
    )
}

start()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
