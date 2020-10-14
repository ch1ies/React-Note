import React, { Component } from 'react'
import Pager from "./Pager"
import Student from './Student'
import StudentList from "./StudentList"
import Modal from "./Modal"
export default class PagerTest extends Component {
    state = {
        current :1,
        total :0,
        limit:10,
        panelNumber:5,
        students:[],
        show:false
    }
    constructor(props){
        super(props)
        this.fetchsracrh()
    }
    async fetchsracrh(){
      this.setState({
        show : true
      })
       const resp = await fetch(`http://open.duyiedu.com/api/student/findByPage?appkey=chilies_1596612510923&page=${this.state.current}&size=${this.state.limit}`)
        .then(res => res.json())
        .then(resp => resp.data)
        this.setState({
          total:resp.cont,
          students :resp.findByPage,
          show:false
        }) 

    }
    handlePageChange = (newPage) =>{  //把这个方法挂载到类实例上，里面的this指向类
       this.setState({
           current : newPage
       })
       this.fetchsracrh()
    }
  render() {
    return (
      <div>
       <Modal show = {this.state.show}/>
        <div>
          <StudentList stus ={this.state.students}/>
        </div>
        <Pager {...this.state} onPageChange = {this.handlePageChange}/>
       
      </div>
    )
  }
}
