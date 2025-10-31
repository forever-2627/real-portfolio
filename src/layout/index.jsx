import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

const PageLayout = () => {
  return (
    <div style={{ overflowX: 'hidden', maxWidth: '100%' }}>
      <Header />
      <div className='position-relative' style={{ overflowX: 'hidden', overflowY: 'visible', maxWidth: '100%', backgroundColor: 'transparent' }}>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}
export default PageLayout;