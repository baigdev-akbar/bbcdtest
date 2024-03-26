import { Colors } from 'chart.js';
import React from 'react';
import { GiNetworkBars } from 'react-icons/gi';
import { IoWifiOutline } from 'react-icons/io5';
import { LuBatteryCharging } from 'react-icons/lu';
import { Link, Outlet } from 'react-router-dom';

const HeaderMobile = () => {
  const date = new Date();
  const showTime = date.getHours() + ':' + date.getMinutes();

  return (
    <div className="mob">
      <div className="mobheaderWrap">
        <div className="mob-hdr-itm-wrapper">
          <div className="firstLine">
            <div align="left" className="timeT">
              {' '}
              {showTime}
            </div>
            <div className="net-wifi-battr">
              <GiNetworkBars className="network" />
              <IoWifiOutline className="wifi" />
              <LuBatteryCharging className="battery" />
            </div>
          </div>
        </div>
        <div className="seconfLineWrap">
          <div className="secondLine" >
            <div className="homeUSerLogin">
              <Link to="/user">
                <img src="/pictures/Frame 48096367.png" alt="" />
              </Link>
            </div>
            <span>Home</span>
            <div className="homeUSerLogin ">
              <a href="https://www.instagram.com/">
                <img src="/pictures/Frame 196.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        
              
              <div className="thirdLineWrap">
                  <div className="thirdLine">
                      <div className='thirdLinerow'>
                      <div className='mobielts'> <span>IELTS</span></div>
                      
                          <div className='mobote'> <span>PTE</span></div>
                          <span>|</span>
                      <div className='mobtoefl'><span>TOEFL</span></div>
                      </div>
                  </div>
              </div>  
      </div>
    </div>
  );
};

export default HeaderMobile;
