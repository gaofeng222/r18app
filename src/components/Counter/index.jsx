import {useState,useEffect} from 'react'
import { Button } from 'antd-mobile'
import { getLists } from '@/api'


function Count(){
  const [count,setCount] = useState(0)
  useEffect(function(){
    const getInfoLists = async () => {
      const data = await getLists()
      console.log("🚀 ~ getInfoLists ~ data:", data)
    }
    getInfoLists()
  },[])
  return <div>
    <p>{count}</p>
    <Button color="primary">点击</Button>
  </div>
}

export default Count