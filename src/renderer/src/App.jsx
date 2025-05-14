import { useEffect, useState } from 'react'
import { Login } from './pages/login'
import { Route, Routes, useNavigate } from 'react-router'
import { HomePages } from './pages/HomePages'
import { ProtectedRoute } from './routes/protectedRoute'

function App() {
  let [isLogin, setIsLogin] = useState(false)
  let [isChecking, setIsChecking] = useState(true)
  const navigate = useNavigate()
  async function checkSession() {
    const session = await window.api.checkSession()
    setIsLogin(session)
  }
  useEffect(() => {
    checkSession()
    console.log(isLogin)
    if (window.api) {
      try {
        window.electron.ipcRenderer.on('ready', (event, res) => {
          console.log('ready event : ', res)
          setIsLogin(res)
        })
        window.electron.ipcRenderer.on('authenticated', (event, res) => {
          setIsLogin(res)
          console.log('Event Auth : ', res)
        })
        window.electron.ipcRenderer.on('auth_failure', (event, res) => {
          setIsLogin(res)
          console.log('auth failure : ', res)
        })
        window.electron.ipcRenderer.on('disconnected', (event, res) => {
          setIsLogin(res)
          console.log('diconnected : ', res)
        })
      } catch (error) {
        console.log(error)
      }
    }
  }, [])

  useEffect(() => {
    if (isChecking) {
      console.log('tessss')
    }
  })
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
