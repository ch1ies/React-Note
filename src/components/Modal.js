// import React, { Component } from 'react'

// export default class Modal extends Component {
    
//     constructor(props){
//         super(props)
        
//     }
//     // isShow(){
//     //     if(!this.props.show){
//     //         this.setState({
//     //             display:"none"
//     //         })
//     //     }
//     // }
//   render() {
    
//     return (
//       <div className = {this.props.show === false ? "modal none" : "modal"}>
   
//           <p>
//           正在加载中
//           </p>
     
//       </div>
//     )
//   }
// }


//使用函数式组件，暂时管理状态，效果更好
import React from 'react'
import "./Modal.css"
export default function Modal(props) {
    if(props.show === false){
        return null
    }
  return (
    <div>
      <div className ="modal">
   
             <p>
              正在加载中
              </p>
        
          </div>
    </div>
  )
}
