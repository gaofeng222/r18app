import {useEffect} from 'react'
import { Outlet } from "react-router-dom"
import { Button } from "antd-mobile"
import { useDispatch } from 'react-redux'
import { getBillLists } from '@/store/modules/billStore'
const Layout = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBillLists())
  },[dispatch])
  return <>
   
   <Outlet />
   <div>
      我是layout
   </div>
   <div>
      <Button color="primary">click</Button>
   </div>
   <div className="purple">
      <Button color="primary">click</Button>
   </div>
  </>
}

export default Layout