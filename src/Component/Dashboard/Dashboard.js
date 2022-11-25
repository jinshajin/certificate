import React from 'react'
import Layout from '../Layout/Layout'
import Dashbanner from './Dashbanner'
import Header from './Header'
import Sidebar from './Sidebar'



function Dashboard() {
  return (
    <div>
      {/* <Header/>

       <Sidebar/> */}
       <Layout>
       <Dashbanner />
       </Layout>
  
    </div>
  )
}

export default Dashboard
