import React, { Component } from 'react'
import Layout from "../../components/Layout/"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import {Route} from "react-router-dom"
import Welcome from "../Welcome"
import StudentList from "../Students/StudentsList"
import StudentAdd from "../Students/StudentAdd"
import Course from "../course/Course"
import CourseAdd from "../course/CourseAdd"
export default class Admin extends Component {
  render() {
    return (
      <div>
            <Layout
               header={<Header/>}
                aside={<Menu />}
                >
             <Route path= "/" exact component={Welcome}/>
             <Route path= "/students" exact component={StudentList}/>
             <Route path= "/students/add" exact component={StudentAdd}/>
             <Route path= "/course" exact component={Course}/>
             <Route path= "/course/add" exact component={CourseAdd}/>
            </Layout>
      </div>
    )
  }
}
