import React, { Component } from 'react'
import "./index.css"
import PropTypes from "prop-types"
import ImgContainer from "./ImgContainer"
import SwitchArrow from "./SwitchArrow"
import SwitchDot from "./SwitchDot"
export default class Banner  extends Component {

    static defaultProps ={
        width : 520,
        height :200,
        imgSrcs:[],
        autoDuration:1500,  // autoduration的值尽量比duration的大
        duration:1000
    }

    static propTypes = {
        width:PropTypes.number.isRequired,  // 容器宽度
        height:PropTypes.number.isRequired,  // 容器高度
        imgSrcs:PropTypes.arrayOf(PropTypes.string).isRequired, // 图片路径数组
        autoDuration:PropTypes.number.isRequired,  // 自动切换的间隔时间
        duration:PropTypes.number.isRequired   // 完成一次切换需要的时间

    }
    timer= null ; //自动切换计时器
    //自动切换函数
    autoSwitch(){
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            var cur = this.state.curIndex;
            cur = (cur + 1) % this.props.imgSrcs.length
            this.handleSwitch(cur)
            this.handleDotChange(cur)
        },this.props.autoDuration)
    }
  
    componentDidMount(){
        this.autoSwitch()
    }
    //  组件销毁时，要清理定时器
    componentWillUnmount = () => {
      clearInterval(this.timer)
    }
    
    state = {
        curIndex:0 //当前显示的第几张图片
    }
    //获取ref
    imgContainerRef = (el) =>{
        this.imgContainer = el
    }

    // 用来调用子组件中用来切换图片的函数
    handleSwitch = index =>{
        //得到ImgContainer的组件对象
        console.log(this.imgContainer)
        this.imgContainer.switchTo(index)

    }
    //左右两个按钮需要处理的事件
    handArrowChange = type =>{
        let cur = this.state.curIndex
        if(type === "left"){
            cur--
            if(cur<0){
                cur = this.props.imgSrcs.length - 1
            }
        }else{
            cur++
            if(cur >this.props.imgSrcs.length -1){
                cur = 0;
            }
        }
        this.setState({
            curIndex:cur
        });
        this.handleSwitch(cur)
    }

    //下边圆点需要处理的事件
    handleDotChange = index =>{
        this.setState({
            curIndex:index
        })
        this.handleSwitch(index)
    }
  render() {
      console.log(this.props)
    return (
    
        <div className="banner-container" 
            style={{
                width:this.props.width,
                height:this.props.height
            }}
            onMouseEnter={() =>{
                clearInterval(this.timer)
            }}
            onMouseLeave={()=>{
                this.autoSwitch()
            }}
        >
           <ImgContainer 
           ref = {this.imgContainerRef}
           imgSrcs={this.props.imgSrcs}
            imgWidth={this.props.width}
            imgHeight={this.props.height}
            duration={this.props.duration}
           />
           <SwitchArrow
                onChange = {this.handArrowChange}
           />
           <SwitchDot 
                total = {this.props.imgSrcs.length}
                curIndex ={this.state.curIndex}
                onChange = {this.handleDotChange}
           />
        </div>
     
    )
  }
}
