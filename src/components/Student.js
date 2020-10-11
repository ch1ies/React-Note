import React from 'react'
//rfc
export default function Student(props) {
    //假设所有的学生信息都是分开传递的
    console.log(props)
  return (
   <li>
       {/* 显示一个学生的信息 */}
       {"{"}姓名{"}"}{props.name}
       【email】{props.wmail}
       【性别】{props.sex === 1?"男" :"女"}
       【出生年月】{props.birth}
   </li>
  )
}
