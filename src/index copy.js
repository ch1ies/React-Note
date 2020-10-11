import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>,
//   <h1>Hello World<span>span元素</span></h1>,
//   document.getElementById('root')
// );

// 嵌入表达式
var a = 1213;
var b = 1212

var obj = {
  a:"1",
}
var obj1 = <span>这是一个对象</span>

var arr = [12,2,null,undefined,false,1,1]

const numbers = new Array(30);
numbers.fill(0);
var lis = numbers.map((item,i) => {
  return <li key={i}>{i}</li>
})
// JSX语法 就是一种语法糖
const div = (
  <>
    <h1>
    {a} * {b} = {a*b}
    </h1>
    <p>
    {/* 以下不会产生任何输出 */}
      {null}
      {undefined}
      {false}
      {0}
    </p>
    <p>
    {/* 普通对象无法放置 */}
      {/* {obj} */}
    </p>
    <p>
    {/* 可以写数组，会遍历这个数组 */}
      {arr}
    </p>
    <p>
      {lis}
    </p>
  </>

)
// 内部会被转换成
// const div = React.createElement("div",{},`${a} * ${b} = ${a * b}`)
ReactDOM.render(div,document.getElementById("root"))