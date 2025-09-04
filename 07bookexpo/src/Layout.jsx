import React from 'react'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
function Layout() {
  return (
   <><div className=''>
   <Header/>
   <Outlet/>
   <Footer/>
    </div>

   
   
   
   
   </>
  )
}

export default Layout
