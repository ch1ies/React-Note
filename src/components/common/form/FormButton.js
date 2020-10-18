import React from 'react'
import {Provider,Consumer} from "./FormContext"
export default function FormButton(props) {
  return (
    <Consumer>
        {ctx => {
            return (
                <button onClick ={() =>{
                    ctx.submit();
                    console.log(ctx)
                    console.log(0)
                }}>
                    {props.children}
                </button>
            )
        }}
    </Consumer>

  )
}
