import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'

const PageLayout = () => {
  return (
    <div>
      <Header />
      <div className='bg-[#ccfff3] min-h-[calc(100vh-72px)] position-relative'>
        <Outlet />
      </div>
    </div>
  )
}
export default PageLayout;