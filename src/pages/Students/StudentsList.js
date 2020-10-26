import React from 'react'
import StudentSearchBar from "../../components/StudentsSearchBar"
import StudentTable from "../../components/StudentTable"
import {searchStudents} from "../../service"
import {useState, useEffect} from "react"
import qs from "query-string"
import Pager from "../../components/Pager"
/**
 * 该函数用于获取地址栏参数冲提供的查询条件
 * 如果某些条件在地址栏中确实，该函数会使用默认值
 */
function getQuery(search){
    const queryDefault ={
        page:1,
        limit:10,
        key:"",
        sex:-1
    }
   let query =  qs.parse(search)
   query = Object.assign({},queryDefault,query)
   return query
}

/**
 * 自定义hook
 */
function useDatas(query){
    const [resp,setResp] = useState({
        cont:0,
        datas:[]
    })
    useEffect(() => {
        searchStudents(query).then(resp =>{
            setResp(resp)
            
        })
    },[query.page,query.limit,query.key,query.sex])
    return resp
}

/**
 * 根据条件对象，改变地址,进而重新渲染组件
 * @param {*} query 
 */
function changeLocation(query,history){
    // console.log(query)
    const search = qs.stringify(query)
    console.log(search)
    history.push("?"+ search)
}

export default function StudentsList(props) {
    const query = getQuery(props.location.search)
    const resp = useDatas(query)

  return (
    <div>
     <StudentSearchBar defaultValue ={{
         key:query.key,
         sex:query.sex
     }}
     onSearch = {cod => {
         const newQuery = {
             ...query,
             key:cod.key,
             sex:cod.sex,
             page:1
         }
         changeLocation(newQuery,props.history)
     }}
     ></StudentSearchBar>
    <StudentTable stus = {resp.datas}/>
    <div>
        <Pager
            current={query.page}
            total={resp.cont}
            limit={query.limit}
            panelNumber={5}
            onPageChange={newPage =>{
               const newQuery = {
                   ...query,
                   page:newPage,
               } 
               changeLocation(newQuery,props.history)
            }}
        />
    </div>
    </div>
  )
}
