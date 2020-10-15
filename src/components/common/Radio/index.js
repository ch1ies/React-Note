import React, { Component } from 'react'

/**
 * 一组单选框
 */
export default class RadioBox extends Component {
    /**
     * 
     * 得到一组单选框
     */
    handleChange = e =>{
        let val
        val = e.target.value
        this.props.onChange && this.props.onChange(val,this.props.name,e)
    }
    getCheckBoxs(){
       return  this.props.datas.map(it=>(
            <label key={it.value}>
                <input 
                type="radio"
                name={this.props.name}
                value={it.value}
                checked= {this.props.value === it.value}
                onChange={this.handleChange}
                />
                {it.text}
            </label>
        ))
    }
  render() {
      const bs = this.getCheckBoxs();
    return (
      <div>
        {bs}
      </div>
    )
  }
}
