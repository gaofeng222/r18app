import {useEffect} from 'react'
import { Outlet } from "react-router-dom"
import { Button } from "antd-mobile"
import { useDispatch } from 'react-redux'
import { getBillLists } from '@/store/modules/billStore'
import GcTabbar from '@/components/GfTabbar'
import './layout.scss'
const Layout = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBillLists())
  },[dispatch])
  return <div className='layout'>
      <div className="container">
          <Outlet />
      </div>
      <div className="footer">
        <GcTabbar />
      </div>
 </div>
}

export default Layout