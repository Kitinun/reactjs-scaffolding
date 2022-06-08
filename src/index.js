import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import Routers from './route/Routers';
import './css/bootstrap.min.css';
import "./css/adminlte.min.css";
import "./css/overlayScrollbars.min.css";
import './css/style.css';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(

    <I18nextProvider>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </I18nextProvider>

  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
