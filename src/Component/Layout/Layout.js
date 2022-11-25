import React from 'react'
import Header from '../Dashboard/Header'
import Sidebar from '../Dashboard/Sidebar'


function Layout({children}) {
  return (
    <div>
      <Header/>
      <div style={{display:'flex'}}>
        <Sidebar/>
        <div className='w-100'>{children}</div>
        

      </div>
    </div>
  )
}

export default Layout
