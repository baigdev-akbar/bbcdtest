import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Feedback = () => {
  return (
    <div className='align-center'>
      <div className="homeUSerLogin">
        <Link to="/user"><img src="/pictures/Frame 48096367.png" alt="" /></Link>
      </div>
      <Outlet />
      <h1>Feedback</h1>
    </div>
  )
}

export default Feedback
