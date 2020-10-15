
import React, { Component } from 'react'
import Select from "./index"
export default class Text extends Component {
    state ={
        datas:[
            {value:"football",text:'足球'},
            {value:"backetball",text:'篮球'},
            {value:"movie",text:'电影'},
        ],
      
       value:""

    }
      
  render() {
    return (
      <div>
        <Select  
        {...this.state}
        name="loves"
        onChange={val =>{
            this.setState({
                value:val
            })
        }}
        />
        
      </div>
    )
  }
}
