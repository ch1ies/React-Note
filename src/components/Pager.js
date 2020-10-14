// import { importDeclaration } from "@babel/types"

import { matcherHint } from 'jest-matcher-utils';
import { magenta } from 'kleur';
import React from 'react';
import { number } from 'yargs';
import "./Pager.css"
/**
 *  分页组件
 * 需要传递属性：
 * 1.current :初始页码
 * 2.total :总数据量
 * 3.limit:页容量，每页显示的数据量
 * 4.panelNumber :数字页码最多显示多少个
 * 5.onPageChange 当页码改变的事件
 * 
 * 自我维护的状态
 * 1.current : 当前页码  //写成类组件
 *  
 */

// export default class Pages extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }
//根据数据，显示页面
export default function Pager(props) {
    const pageNumber = getPagerNumber(props) //总页数
    if(pageNumber === 0){
        return null
    }
    const min = getMinNumber(props)
    const max = geTMaxNumber(min,pageNumber,props)
    const numbers = [];
    for(let i = min; i<= max; i++){
        numbers.push(<span key = {i} onClick={() => {toPage(i,props)}} className = {i === props.current ? "item active" : "item"} >{i}</span>)
    }
    // console.log(pageNumber)
    return(
       <>
            <span
            onClick={() => {toPage(1,props)}}
             className = {props.current === 1? "item disabled" :"item "}> 首页</span>
            <span
            onClick={() => {toPage(props.current - 1 < 1 ? 1 : props.current - 1,props)}}
             className = {props.current === 1? "item disabled" :"item "}> 上一页</span>
                {/* 中间的数字页码 */}
                {numbers}
            <span
             onClick={() => {toPage(props.current + 1 > pageNumber ? pageNumber : props.current + 1,props)}}
             className = {props.current === pageNumber? "item disabled" :"item "}> 下一页</span>
            <span
            onClick={() => {toPage(pageNumber,props)}}
            className = {props.current === pageNumber? "item disabled" :"item "}> 尾页</span>

            <span className="currrent">{props.current} </span>
                /
            <span>{pageNumber}</span>
       </>
    )
}

/* 计算总页数 */
function getPagerNumber(props){
    return Math.ceil(props.total / props.limit )
}

/**
 * 跳转到某一页
 * @param {*} target 目标页码 
 * @param {*} props  所有属性
 */
function toPage(target,props){
    if(props.current === target){
        return
    }
    props.onPageChange && props.onPageChange(target)
}

//计算最小数字
function getMinNumber(props){
   var min  =  props.current - Math.floor(props.panelNumber / 2)
   if(min < 1){
       min = 1
   }
   return min 
}

// 计算最大数字
function geTMaxNumber(min,pageNumber,props){
    var max = min + props.panelNumber - 1
    if(max > pageNumber){
        max = pageNumber
    }
    return max

}