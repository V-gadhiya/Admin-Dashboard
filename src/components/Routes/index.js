import React from 'react'
import {Routes ,Route} from  "react-router-dom"
import Dashboard from "../../pages/Dashboard"
import Inventory from "../../pages/Inventory"
import Orders from "../../pages/Orders"
import Customers from "../../pages/Customers"


const index = () => {
  return (
    
    
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/Orders' element={<Orders />} />
        <Route path='/Customers' element={<Customers />} />
      </Routes>
    
    
  )
}

export default index
