import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import Explore from './homepageFiles/Explore'
import LogOutBtn from './LogOutBtn'
import logo_nobg from './logo_nobg.png'
import home_no_bg from './home_no_bg.png'
import Usernobg from './Usernobg.png'
import Frame48097125 from './Frame48097125.png';
import Storefront from './Storefront.png';
import message_square from './message_square.png';

const Layout = () => {
    


    return (
    
    <div className='layout'>
            <div className='ul desk'>
            <nav className='wrapping-menu-logo'>
                <div className='logo'><img className='logo-img' src={logo_nobg} alt="" /><span className='logo-text'>BabyCode</span></div>
              
              <div className='li'>
                  <NavLink className='manu' to='/'><img className='menu-img' src={home_no_bg} alt="" /><span className='menu-text' >Home</span></NavLink>
                </div>  
                <div className='li'>
                  <NavLink className='manu' to='/community'><img className='menu-img' src={Usernobg} alt="" /><span className='menu-text'>Community</span></NavLink>
                </div>
                <div className='li'>
                  <NavLink className='manu' to='/stories'><img className='menu-img' src={Frame48097125} alt="" /><span className='menu-text'>Stories</span></NavLink>
                </div>
                <div className='li'>
                  <NavLink className='manu ' to='/shop'><img className='menu-img' src={Storefront} alt="" /><span className='menu-text'>Shop</span></NavLink>
                </div>
                <div className='li'>
                  <NavLink className='manu' to='/feedback'><img className='menu-img' src={message_square} alt="" /><span className='menu-text'>Feedback</span></NavLink>
                </div>
                </nav>
                <div className='bottom-module'> <Explore /></div>
                <div className='logOut'><LogOutBtn/></div>
          </div>
        <div className='outlet'> <Outlet /></div>
        {/* Components for mobile */}
        
        <div className='ul mob '>
            <nav className='wrapping-menu-logo'>
                <div className='logo desk'><img className='logo-img' src={logo_nobg} alt="" /><span className='logo-text'>BabyCode</span></div>
              
              <div className='li'>
                  <NavLink className='manu' to='/'><img className='menu-img' src={home_no_bg} alt="" /><span className='menu-text' >Home</span></NavLink>
                </div>  
                <div className='li'>
                  <NavLink className='manu' to='/community'><img className='menu-img' src={Usernobg} alt="" /><span className='menu-text'>Community</span></NavLink>
                </div>
                <div className='li'>
                  <NavLink className='manu' to='/stories'><img className='menu-img' src={Frame48097125} alt="" /><span className='menu-text'>Stories</span></NavLink>
                </div>
                <div className='li'>
                  <NavLink className='manu ' to='/shop'><img className='menu-img' src={Storefront} alt="" /><span className='menu-text'>Shop</span></NavLink>
                </div>
                <div className='li'>
                  <NavLink className='manu' to='/feedback'><img className='menu-img' src={message_square} alt="" /><span className='menu-text'>Feedback</span></NavLink>
                </div>
                </nav>
                <div className='bottom-module desk'> <Explore /></div>
                <div className='logOut desk'><LogOutBtn/></div>
          </div>
          </div>
         
      
      
  )
}

export default Layout
