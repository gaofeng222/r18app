import { TabBar,Badge } from "antd-mobile"
import { useState } from 'react'
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'
import { useLocation,useNavigate } from "react-router-dom"
const tabs = [
  {
    key: '/month',
    title: '月度账单',
    icon: <AppOutline />,
    badge: Badge.dot,
  },
  {
    key: '/new',
    title: '增加',
    icon: <UnorderedListOutline />,
    badge: '5',
  },
  {
    key: '/year',
    title: '年度账单',
    icon: <UserOutline />,
  },
]
function GcTabbar(){
  let [nowPath,setNowPath] = useState('/month')
  const router = useNavigate()
  const setRouteActive = data => {
    router(data)
    setNowPath(data)
  }
  return <>
    <TabBar safeArea activeKey={nowPath} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  </>
}

export default GcTabbar