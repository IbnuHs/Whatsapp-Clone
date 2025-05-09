import { useEffect, useState } from 'react'
import { CheckContact } from './components/checkContact/CheckContact'
import { Sidebar } from './components/main/Sidebar'
import { Login } from './pages/login'
import { Navigate, Route, Router, Routes, useLocation, useNavigate } from 'react-router'
import { HomePages } from './pages/HomePages'
import { ProtectedRoute } from './routes/protectedRoute'

function App() {
  let [isLogin, setIsLogin] = useState(true)
  // const location = useLocation()
  const navigate = useNavigate()
  async function checkSession() {
    const session = await window.api.checkSession()
    // setIsLogin(session)
  }
  useEffect(() => {
    checkSession()
    if (window.api) {
      try {
        window.electron.ipcRenderer.on('ready', () => {
          console.log('Event ready')
        })
        window.electron.ipcRenderer.on('authenticated', () => {
          // setIsLogin(true)
          // console.log('Event Auth')
        })
        window.electron.ipcRenderer.on('auth_failure', (res) => {
          // setIsLogin(false)
          // console.log(res)
        })
        window.electron.ipcRenderer.on('disconnected', (res) => {
          // setIsLogin(false)
          // console.log(res)
        })
      } catch (error) {
        console.log(error)
      }
      // console.log('Selsai')
    }
    // console.log(isLogin)
  }, [])

  useEffect(() => {
    if (isLogin) {
      console.log('Whatsapp is login')
      navigate('/')
      return
    }
    navigate('/login')
  }, [isLogin])
  return (
    <div className="">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute isLogin={isLogin}>
              <HomePages isLogin={isLogin} setIsLogin={setIsLogin} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default App
