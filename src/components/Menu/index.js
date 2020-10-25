import React from 'react'
import "./index.css"
export default function Menu() {
  return (
    <div>
      <ul className="menu">
          <li><a href="/students">学生管理</a></li>
          <li><a href="/students/add">添加学生</a></li>
          <li><a href="/course">课程列表</a></li>
          <li><a href="/course/add">添加课程</a></li>
      </ul>
    </div>
  )
}
