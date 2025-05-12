import React from 'react'
import { Sidebar } from '../components/main/Sidebar'
import { CheckContact } from '../components/checkContact/CheckContact'
import { LogoutDialog } from '../components/main/Dialog'
import { useState } from 'react'
export const HomePages = ({ isLogin, setIsLogin }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex">
      <LogoutDialog open={open} setOpen={setOpen} />
      <Sidebar isLogin={isLogin} setIsLogin={setIsLogin} setOpen={setOpen} />
      <CheckContact />
    </div>
  )
}
