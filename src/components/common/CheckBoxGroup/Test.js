
import React, { Component } from 'react'
import CheckBoxGroup from "./index"
import getAllStudents from "../../../service/Students"
export default class Text extends Component {
    state ={
        // datas:[
        //     {value:"football",text:'足球'},
        //     {value:"backetball",text:'篮球'},
        //     {value:"movie",text:'电影'},
        // ],
      
        // chooseDatas:["football"]
        datas:[],
        chooseDatas:[]
    }
    
    //在生命周期函数中发生网络请求
    async componentDidMount(){
      const stus = await getAllStudents()
      this.setState({ 
        // 拿到的是数字，需转换为字符串
        datas:stus.map(it =>({value:it.id.toString(),text:it.name}))
      })
    }
  
  render() {
    return (
      <div>
        <CheckBoxGroup  
        {...this.state}
        name="loves"
        onChange={newArr =>{
            this.setState({
                chooseDatas:newArr
            })
        }}
        />
        
      </div>
    )
  }
}
