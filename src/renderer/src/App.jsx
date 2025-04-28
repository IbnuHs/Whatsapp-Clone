import { CheckContact } from './components/checkContact/CheckContact'
import { Sidebar } from './components/main/Sidebar'
import { Login } from './pages/login'

function App() {
  const isLogin = true

  return (
    <div className="">
      {isLogin ? (
        <div className="flex">
          <Sidebar />
          <CheckContact />
        </div>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default App
