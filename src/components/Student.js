import React from 'react'

export default function Student({name,sex,birth}) {
  return (
    <div>
        <li>
            【姓名】{name}
            【性别】{sex === 1? "男":'女'}
            【姓名】{birth}
          
        </li>
    </div>
  )
}
