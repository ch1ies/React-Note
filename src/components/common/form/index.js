import React, { Component } from 'react'
import {Provider,Consumer} from "./FormContext"
import FormInput from "./FormInput"
import PropTypes from "prop-types"
import FormButton from './FormButton'

export default class From extends Component {
    state = {
        formData:{}, //表单数据对象  约定类型为{loginId:xxx,loginPwd:xxx}
        changeFormData:(name,val) =>{
            this.setState({
                formData:{
                    ...this.state.formData, // 保留之前需要的属性
                    [name]:val  //覆盖的属性
                }
            })
        },
        submit:() =>{ 
            this.props.onSubmit && this.props.onSubmit(this.state.formData)
        }
    }

    static propTypes = {
        onSubmit : PropTypes.func
    }
  render() {
     
    return (
      <div>
        <Provider value = {this.state}>
            {this.props.children}
        </Provider>
      </div>
    )
  }
}

From.Input = FormInput
From.Button = FormButton