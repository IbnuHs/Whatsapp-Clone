import React from 'react'
import { Sidebar } from '../components/main/Sidebar'
import { CheckContact } from '../components/checkContact/CheckContact'
export const HomePages = () => {
  return (
    <div className="flex">
      <Sidebar />
      <CheckContact />
    </div>
  )
}
