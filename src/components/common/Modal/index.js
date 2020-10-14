import React from 'react'

import "./index.css"
export default function Modal(props) {
  console.log(props)
  var defaultProps = { //默认属性
    bg :'rgba(0,0,0,.5)'
  }
  var datas = Object.assign({},defaultProps,props)
  
  return (
    //抛出事件 
    //bug 会有事件冒泡，需要判断一下事件源对象
    <div 
      onClick ={(e) => {
      console.log(e.target)
      if(e.target.className === "modal"){
        datas.onClose()
      }
      }} 
      className="modal" 
      style={{
        background : datas.bg
      }}>
        <div className="Modal-center">
          {props.children}
        </div>
    </div>
  )
}
