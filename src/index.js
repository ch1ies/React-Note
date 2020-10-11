import React from "react";
import ReactDOM from "react-dom";
// import Student from "./components/Student";

import StudentList from "./components/StudentList"
var appkey = "chilies_1596612510923";
//显示学生列表
/**
 * 获取所有的学生数据
 */
async function fetchAllStudent(){
  var stus =  await fetch("http://open.duyiedu.com/api/student/findAll?appkey=" + appkey)
    .then(resp =>resp.json()).then(resp=>resp.data)
   return stus
}


// const s = {
    
// address: "傻瓜大街",
// appkey: "chilies_1596612510923",
// birth: 1997,
// ctime: 1596686428,
// email: "123113131@qq.com",
// id: 60644,
// name: "张三",
// phone: "13211231313",
// sNo: "121212",
// sex: 0,
// utime: 1596812934,
// }

async function render(){
    ReactDOM.render("页面正在加载中...",document.getElementById("root"))
    const stus = await fetchAllStudent() // 获取学生的数据 ，是一个包含对象的数组，一个对象的信息就是一个学生的信息，就是一个组件
    ReactDOM.render(<StudentList stus= {stus} />,document.getElementById("root"))
}

render()