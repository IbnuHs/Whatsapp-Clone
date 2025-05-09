import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router'

export const ProtectedRoute = ({ isLogin, children }) => {
  // console.log(isLogin)
  // const navigate = useNavigate()
  // useEffect(() => {
  //   if (!isLogin) {
  //     navigate('/login')
  //   }
  // }, [isLogin])
  if (!isLogin) {
    return <Navigate to="/login" />
  }
  return children
}
