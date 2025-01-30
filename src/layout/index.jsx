import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

const PageLayout = () => {
  return (
    <div>
      <Header />
      <div className='bg-[#ccfff3] position-relative'>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}
export default PageLayout;