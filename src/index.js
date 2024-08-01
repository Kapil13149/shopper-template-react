import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { ShopperIndex } from './Shopper-Index/Shopper-Index';
import { CookiesProvider } from 'react-cookie';
// import { MaterialComponent } from './material-component/material-component';
// import { EffectsComponent } from './effects-component/effects-components';
// import { ContextDemo } from './context-demo/context-demo';
// import { ReducerDemo } from './reducer-demo/reducer-demo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <ShopperIndex />
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
