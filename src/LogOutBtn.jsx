import React from 'react'

const LogOutBtn = () => {
    const logOut = () => {
        alert("Logged Out Successfully");
    }
  return (
    <div>
      <button onClick={logOut} className='lgtBtn'><img src="/pictures/logout-nobg.png" alt="" /><span>Logout</span></button>
    </div>
  )
}

export default LogOutBtn
