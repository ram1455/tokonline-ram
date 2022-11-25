import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ProfileDetails from '../pages/ProfileDetails';
function PrivateRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/profile' element={<ProfileDetails/>}/>
      </Routes>
    </Router>
  )
}

export default PrivateRoutes