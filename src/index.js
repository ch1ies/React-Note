import React from 'react';
import ReactDOM from 'react-dom';

import src1 from "./assets/img1.jpg"
import src2 from "./assets/img2.jpg"
import src3 from "./assets/img3.jpg"

import "./index.css"
let srsList = [src1,src2,src3]
let index = 2

// let img = (
// <>
// <img src={srsList[index]} alt="" />
// </>
// )

let container = document.getElementById("root")

let timer 
/**
 * 渲染页面
 */
function render(){
  ReactDOM.render(<img src={srsList[index]} alt="" /> ,container)
}


function start(){
  stop();
 timer =  setInterval(() =>{
    // console.log(index)
    index = (index + 1) % 3
    render()
  },1000)
}

function stop(){
  clearInterval(timer)
}
render()
start()

container.onmouseenter = function(){
  stop()
  console.log(111)
}
container.onmouseleave = function(){
  start()
  console.log(222)
}