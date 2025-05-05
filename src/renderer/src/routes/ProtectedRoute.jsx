import React from 'react'
import { Navigate } from 'react-router'

export const ProtectedRoute = ({ isLogin, children }) => {
  if (!isLogin) {
    return <Navigate to="/login" />
  }
  return children
}
