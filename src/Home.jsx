import React from 'react'
import PrepareWithEase from './PrepareWithEaseFiles/PrepareWithEase'
import {Link, Outlet} from 'react-router-dom'
import YourProgressSummary from './YourProgresSummery/YourProgressSummary'
import QuickActions from './mobileAppComps/QuickActions'
import Explr from './mobileAppComps/Explr'
import Prepare from './mobileAppComps/Prepare'
import HeaderMobile from './mobileAppComps/HeadMobile'


const Home = () => {

  
  return (
    <div>
      <HeaderMobile/>
      <div className="homeUSerLogin desk">
        <Link to="/user"><img src="/pictures/Frame 48096367.png" alt="" /></Link>
      </div>
      <Outlet />
      <YourProgressSummary/>
      <PrepareWithEase />
      <Prepare className="mob"/>
      <Explr className="mob"/>
      <QuickActions className="mob"/>
    </div>
  )
}

export default Home
