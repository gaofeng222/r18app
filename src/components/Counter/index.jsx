import {useState} from 'react'
import { Button } from 'antd-mobile'

function Count(){
  const [count,setCount] = useState(0)
  return <div>
    <p>{count}</p>
    <Button color="primary">点击</Button>
  </div>
}

export default Count