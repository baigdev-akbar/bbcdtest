import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Frame48096367 from './Frame48096367.png';

const Feedback = () => {
  return (
    <div className='align-center'>
      <div className="homeUSerLogin">
        <Link to="/user"><img src={Frame48096367} alt="" /></Link>
      </div>
      <Outlet />
      <h1>Feedback</h1>
    </div>
  )
}

export default Feedback
