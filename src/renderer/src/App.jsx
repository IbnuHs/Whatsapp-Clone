import { Sidebar } from './components/main/Sidebar'
import { Login } from './pages/login'

function App() {
  const isLogin = false
  return (
    <div className="">
      {isLogin ? (
        <div className="flex bg-[#3b4252]">
          <Sidebar />
        </div>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default App
