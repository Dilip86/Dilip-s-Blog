
import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import Header from './components/header/header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  // console.log(import.meta.env.VITE_REACT_APPWRITE_URL)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        }
        else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-500  '>
      <div className='w-full block'>
        <Header />
        <main>  
        todo  {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : (null)

  return (
    <>
      <h1>Blog Website with AppWrite</h1>
    </>
  )
}

export default App
