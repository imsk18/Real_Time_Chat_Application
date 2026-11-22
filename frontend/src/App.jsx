import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { useAuth } from './features/auth/hook/useAuth'


import router from './app/app.routes'

const App = () => {
  const {handleGetMe} = useAuth();

  useEffect(()=>{
    handleGetMe()

  },[])
  return (
    <RouterProvider  router = {router}/>
  )
}

export default App