// 类组件
import React from 'react'
import Student from "./Student"
export default class StudentList extends React.Component {
    // 系统内部自动完成
    // constructor(props){   
    //     this.props = props
    // }
  render() {
      //约定 props.stus 传递的是学生的数组
      //获取组件数组
      // {...item}相当于把整个对象都传递过去了
    const students = this.props.stus.map(item => <Student {...item} key={item.id}/>)
    return (
   <ul>
       {students}
   </ul>
    )
  }
}
