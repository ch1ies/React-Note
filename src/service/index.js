// import { FSEventsWatcher } from "sane";

const appkey = "chilies_1596612510923"
export default async function getAllStudentsBypage(page=1,limit=10){
  
    //使用了代理
  return  await fetch(`/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`)
   .then(resp => resp.json()).then(resp=>resp.data)
}
