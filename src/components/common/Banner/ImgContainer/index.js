import React, { Component } from 'react'
import PropTypes from "prop-types"
export default class ImgContainer extends Component {
    // 可不写，因为父组件一定会传递属性过来
    // static defaultProps = {
    //     ingSrcs:[],
    //     imgWidth:520,
    //     imgHeight:280,
    // }
    static propTypes ={
        imgSrcs : PropTypes.arrayOf(PropTypes.string).isRequired,
        imgWidth:PropTypes.number.isRequired ,  //单张图片的宽度
        imgHeight:PropTypes.number.isRequired ,  //单张图片的高度
        duration:PropTypes.number.isRequired  // 在多场时间内完成动画切换
     }
       // 计时器的间隔时间
         tick = 16   
        timer = null // 计数器属性

    /**
     * 切换到第几张图片
     * 调用该函数，次组件会经过一段动画完成切换
     * @param {*} index   图片下标，从0开始
     * 实现切换功能的两种方案：
     * 1.state{matginLeft : 0} 
     * 2.给return的div设置样式： marginLeft：this.props.marginLeft
     * 3.withchTo里面设置marginLeft的值
     * 该种方案比较符合React的设计理念，效率稍慢，要频繁的调用render进行渲染
     * 第二种方案
     * 使用ref操作真实的dom元素
     */
  switchTo(index){ // 怎么切换？
    //设置正确的index
    if(index < 0){
        index= 0
    }
    else if(index > this.props.imgSrcs.length - 1){
        index = this.props.imgSrcs.length -1 
    }
    //1.根据index,极端div的最终的marginLeft
    const targetLeft = -index * this.props.imgWidth;
    //2.得到当前的额marginLeft
    let curLeft = parseFloat(getComputedStyle(this.div).marginLeft)
    // 3.计算运动的次数
    const timer = Math.ceil(this.props.duration / this.tick)
    let curtimers= 0  // 当前运动的次数
    //4.计算每次运行的距离
    const totalDis = targetLeft - curLeft
    const dis = totalDis / timer  //每次运动的距离
    // 先停止之前的动画
    clearInterval(this.timer)
    this.timer = setInterval(() => {
        curtimers++;
        curLeft += dis;
        this.div.style.marginLeft = curLeft + "px"
        if(curtimers === timer){
            //停止运动
            this.div.style.marginLeft = targetLeft + "px"
            clearInterval(this.timer)
        }
    
    },this.tick)
  }

  containerRef = el =>{
      this.div = el
  }
  render() {
     const imgs =  this.props.imgSrcs.map((src,index) => <img key ={index} src={src} alt="" style={{
         width : this.props.imgWidth,  // 给图片自身设置宽高，防止出错
         height:this.props.imgHeight,
         float:"left"
     }}
          
      />)
    return (
     
        <div 
            ref = {this.containerRef}
            style={{
            width:this.props.imgSrcs.length * this.props.imgWidth,
            height:this.props.imgHeight
         
        }}>
        
        {imgs}
        </div>
     
    )
  }
}
