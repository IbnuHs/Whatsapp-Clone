import React from 'react'
import { Sidebar } from '../components/main/Sidebar'
import { CheckContact } from '../components/checkContact/CheckContact'
import { LogoutDialog } from '../components/main/Dialog'
export const HomePages = ({ isLogin, setIsLogin }) => {
  return (
    <div className="flex">
      <LogoutDialog />
      <Sidebar isLogin={isLogin} setIsLogin={setIsLogin} />
      <CheckContact />
    </div>
  )
}
