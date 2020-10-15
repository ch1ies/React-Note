import React, { Component } from 'react'

/**
 * 一组下拉列表
 */
export default class Select extends Component {
    /**
     * 
     * 得到一组下拉列表
     */
    handleChange = e =>{
        let val = e.target.value
     
        this.props.onChange && this.props.onChange(val,this.props.name,e)
    }
    getCheckBoxs(){
       return  this.props.datas.map(it=>(
           <option key={it.value} value={it.value}>
             {it.text}
           </option>
        ))
    }
  render() {
      const options = this.getCheckBoxs();
    return (
      <select name={this.props.name} 
        value={this.props.value}
        onChange={this.handleChange}
      >
        {options}
      </select>
    )
  }
}
