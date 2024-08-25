import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./Appwrite/appwriteAuth"
import {login, logout} from "./store/AuthenticationSlice"
import { Footer, Header} from './components/index'
import { Outlet } from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='h-screen flex flex-col content-between bg-gray-300'>
      <div className='w-full block'>
        <Header />
        <main className='flex-grow'>
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
