import {useState,useEffect} from 'react'
import { Button } from 'antd-mobile'
import { getLists } from '@/api'

function Count(){
  const [count,setCount] = useState(0)
  useEffect( () => {
    // const getInfoLists = async () => {
    //   await getLists()
    // }
    // getInfoLists()
    
  },[])
  return <div>
    <p>{count}</p>
    <Button color="primary">点击</Button>
  </div>
}

export default Count