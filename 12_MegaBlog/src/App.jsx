import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth'
import './App.css'
import {login, logout} from './store/authSlice'
import {Header, Footer} from './components/index'
import { Outlet } from 'react-router-dom';

function App() { 
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  


  return !loading ? (
    <div className='min-h-screen content-between flex flex-wra bg-zinc-800'>
      <div className='w-full block'>
        <Header/>
          <main>
            {/* <Outlet/> */}
          </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
