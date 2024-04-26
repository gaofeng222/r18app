import {useState,useEffect} from 'react'
import { Button } from 'antd-mobile'
import { getLists } from '@/api'


function Count(){
  let [count,setCount] = useState(0)
  useEffect(function(){
    const getInfoLists = async () => {
      const data = await getLists()
      console.log("🚀 ~ getInfoLists ~ data:", data)
    }
    getInfoLists()
  },[count])
  function changeCount(){
    setCount(++count)
  }
  return <div>
    <p>{count}</p>
    <Button color="primary" onClick={changeCount}>点击</Button>
  </div>
}

export default Count