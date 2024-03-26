import React from 'react'
import logout_nobg from './logout_nobg.png';

const LogOutBtn = () => {
    const logOut = () => {
        alert("Logged Out Successfully");
    }
  return (
    <div>
      <button onClick={logOut} className='lgtBtn'><img src={logout_nobg} alt="" /><span>Logout</span></button>
    </div>
  )
}

export default LogOutBtn
