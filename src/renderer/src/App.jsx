import { useEffect, useState } from 'react'
import { CheckContact } from './components/checkContact/CheckContact'
import { Sidebar } from './components/main/Sidebar'
import { Login } from './pages/login'
import { Navigate, Route, Router, Routes, useLocation } from 'react-router'
import { HomePages } from './pages/HomePages'
import { ProtectedRoute } from './routes/protectedRoute'

function App() {
  let [isLogin, setIsLogin] = useState(false)
  const location = useLocation()
  useEffect(() => {
    console.log(location)
    if (isLogin) {
      return <Navigate to="/" />
    }
    window.api.checkSession().then((res) => {
      console.log('isLogin? ', res)
    })
    window.api.onEvent('ready', () => {
      console.log('whatsapp ready')
      setIsLogin(true)
    })
    window.api.onEvent('authenticated', () => {
      setIsLogin(true)
      console.log('Authenticated')
    })
    window.api.onEvent('auth_failure', (res) => {
      setIsLogin(false)
      console.log(res)
    })
    window.api.onEvent('disconnected', (res) => {
      setIsLogin(false)
      console.log(res)
    })
    console.log(isLogin)
  }, [])
  return (
    <div className="">
      <Routes>
        {/* <Route path=''/> */}

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute isLogin={isLogin}>
              <HomePages />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default App
