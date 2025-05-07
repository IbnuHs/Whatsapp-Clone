import { useEffect, useState } from 'react'
import { CheckContact } from './components/checkContact/CheckContact'
import { Sidebar } from './components/main/Sidebar'
import { Login } from './pages/login'
import { Navigate, Route, Router, Routes, useLocation, useNavigate } from 'react-router'
import { HomePages } from './pages/HomePages'
import { ProtectedRoute } from './routes/protectedRoute'

function App() {
  let [isLogin, setIsLogin] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (window.api) {
      window.api.checkSession().then((res) => {
        // console.log('isLogin? ', res)
      })
      window.electron.ipcRenderer.on('ready', () => {
        console.log('Event ready')
        setIsLogin(true)
      })
      window.electron.ipcRenderer.on('authenticated', () => {
        setIsLogin(true)
        console.log('Event Auth')
      })
      window.electron.ipcRenderer.on('auth_failure', (res) => {
        setIsLogin(false)
        // console.log(res)
      })
      window.electron.ipcRenderer.on('disconnected', (res) => {
        setIsLogin(false)
        // console.log(res)
      })
      console.log('Selsai')
    }
    // console.log(isLogin)
  }, [])

  useEffect(() => {
    console.log(isLogin)
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
        {/* <Route path=''/> */}

        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<HomePages />} /> */}
        {/* <Route path="/" element={<Navigate to="/home" />} /> */}
        <Route
          path="/"
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
