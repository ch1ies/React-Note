import React ,{useState,useEffect}from 'react'
import StudentList from "../StudentList"
import getAllStudentsBypage from "../../service"
import Pager from "../Pager"

/**
 * 用于提供数据，以及控制数据的变化
 */
export default function StudentContainer() {
    const [students,setStudents]  = useState([])
//    const [page,setPage] = useState(1)
    const [page,setPage] = useState(1)
    const [limit,setLimit] = useState(10)
    const [total,setTotal] = useState(0)
    const [panelNumber,setPanelNumber] = useState(5)
    //当页码和页容量发生变化时，将重新获取数据
   useEffect(() => {
        (async function(){
            const resp = await getAllStudentsBypage(page,limit)
            setStudents(resp.findByPage)
            setTotal(resp.cont)
        })() //page变化时，需要重新获取数据

   },[page,limit]) // 设置空数组的目的，是让该副作用函数没有任何依赖项，从而仅在首次挂载时运行
  return (
    <div>
      <StudentList stus={students}/>
      <Pager current={page} limit ={limit} total={total} panelNumber={panelNumber} 
         onPageChange={(newPage)=>{
            setPage(newPage)
         }}
      />
      <p>
      每页显示的条数：
        <input type="number"
            value = {limit}
            onChange ={e =>{
                setLimit(e.target.value)
            }}
        />
      </p>
      <p>
          最多显示的数字页码
          <input type="number"
              value = {panelNumber}
              onChange ={e => {
                  setPanelNumber(e.target.value)
              }}
              
          />
      </p>
      
      {/* <input type="number" value = {page} onChange={(e)=>{
          setPage(parseInt(e.target.value))
      }} /> */}
    </div>
  )
}
