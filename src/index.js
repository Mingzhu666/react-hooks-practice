import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import ButtonOne from './components/ButtonOne';
import ButtonTwo from './components/ButtonTwo';
import ButtonThree from './components/ButtonThree';
import reportWebVitals from './reportWebVitals';
import AddMinus from './components/AddMinus';

ReactDOM.render(
  <React.StrictMode>
    <ButtonOne />
    <ButtonTwo /> 
    <ButtonThree />
    <AddMinus />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
