
import React from 'react'
import ReactDOM from 'react-dom'
import CounterApp from './CounterApp';
// import FirstApp from './FirstApp';
import './index.css'


// const saludo = <h1>Hola mundo</h1>;

const divRoot = document.querySelector('#root');

// ReactDOM.render(<FirstApp saludo="hola, soy goku" />, divRoot);
// ReactDOM.render(<FirstApp saludo="Hola soy goku" />, divRoot);
ReactDOM.render(<CounterApp value={10} />, divRoot);

// console.log('hello david!!');