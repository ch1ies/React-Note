import React, { Component } from 'react'
import Ball from "./Ball"
import {getRandom}  from "../utils"
/**
 * 每隔一段时间，自动产生一个小球，各种数据随机
 */
export default class BallList extends Component {
    constructor(props){
        super(props);
        this.state ={
            //管理小球的信息
            ballInfoes:[]
        }
       const timer =  setInterval(() => {
            var info = {
                left : getRandom(0,document.documentElement.clientWidth-100),
                top : getRandom(0,document.documentElement.clientHeight-100),
                xSpeed:getRandom(50,500),
                ySpeed:getRandom(50,500),
                bg:`rgb(${getRandom(0,255)},${getRandom(0,255)},${getRandom(0,255)})`
            } ;
            this.setState({
                ballInfoes:[...this.state.ballInfoes,info] //把数据添加上this.state中进行数据管理
            })
            if(this.state.ballInfoes.length === 10){
                clearInterval(timer)
            }
        }, 1000);
    }
  render() {
      // 把数组映射成为一个数组，并传递对象信息
     const balls = this.state.ballInfoes.map((item,i) => <Ball {...item} key={i}/> )
    return (
      <div>
      {/* 数组放进来，会循环数组，把每一项的值渲染出来，循环是要添加key属性 */}
        {balls}
      </div>
    )
  }
}
