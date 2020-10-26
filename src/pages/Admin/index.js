import React, { Component } from 'react'
import Layout from "../../components/Layout/"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import {Route,Switch} from "react-router-dom"
import Welcome from "../Welcome"
import StudentList from "../Students/StudentsList"
import StudentAdd from "../Students/StudentAdd"
import Course from "../course/Course"
import CourseAdd from "../course/CourseAdd"
import Studentsdetails from "../../components/StudentsDetails"
export default class Admin extends Component {
  render() {
    return (
      <div>
            <Layout
               header={<Header/>}
                aside={<Menu />}
                >
                <Switch>
                    {/* 路由匹配到哪个路径，就渲染该路径对应的组件，如没有匹配到的路径对应的组件，在Route中的render里return null */}
                    <Route path= "/" exact component={Welcome}/>
                    <Route path= "/students" exact component={StudentList}/>
                    <Route path= "/students/add" exact component={StudentAdd}/>
                    <Route path= "/students/:sno" exact component={Studentsdetails}/>
                    <Route path= "/course" exact component={Course}/>
                    <Route path= "/course/add" exact component={CourseAdd}/>
                </Switch>
         
            </Layout>
      </div>
    )
  }
}
