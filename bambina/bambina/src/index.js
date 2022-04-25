import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDWYeXbaOS9zw4fL5UO4h6rzBDR5Hd3J8Y",
  authDomain: "bambina-disegno.firebaseapp.com",
  projectId: "bambina-disegno",
  storageBucket: "bambina-disegno.appspot.com",
  messagingSenderId: "567240577259",
  appId: "1:567240577259:web:5fa7c679072410c48d2eae"
};

initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
