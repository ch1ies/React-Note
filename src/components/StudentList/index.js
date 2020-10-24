import React from 'react'
import PropTypes from "prop-types"


/**
 * 学生列表的组件
 */
export default function StudentList({ stus }) {
    //做成无状态组件，只负责显示学生列表,需要外界传递两个属性值。name,sex,address
    const list  = stus.map(it => (<li key={it.name}>{it.name} {it.sex === 1?"男":"女"} {it.address} </li>))
  return (
    <ul>
      {list}
    </ul>
  )
}

StudentList.defaultProps = {
    page: []
}
StudentList.propTypes = {
    page : PropTypes.array.isRequired
}