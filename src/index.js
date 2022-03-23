import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
//导入方式默认名加路径
import reportWebVitals from './reportWebVitals';
import NumberList from "./NumberList";


ReactDOM.render(
  <React.StrictMode>
    {/*  <Fibonaccisequence/>*/}
    {/*  <Input/>*/}
    <NumberList />
    {/*  <HelloWord  title="传递" content="这就是内容......."/>*/}
    {/*<HelloWorldFn/>*/}
    {/*  <App/>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
