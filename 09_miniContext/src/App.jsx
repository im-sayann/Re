
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <>
      <UserContextProvider>
        <h1>
          Helloww Y'all
        </h1>
        <Profile/>
        <Login/>
      </UserContextProvider>
    </>
  )
}

export default App
