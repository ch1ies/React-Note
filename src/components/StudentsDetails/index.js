import React from 'react'

export default function index(props) {
    console.log(props)
  return (
    <div>
        <h1>学生信息</h1>  
        <h2>学号 ：{props.match.params.sno}</h2>
    </div>
  )
}
