import React from 'react'
import { CiCircleCheck } from "react-icons/ci";
import Buynow from '../additionalpages/Buynow';

const Explore = () => {
    const byNow = () => {
        <Buynow />
        alert("To be implemented")
    }
  return (
      <div className='expolre '>
          <span className='exp-title'>Explore premium feetures with ease!</span>

          <div className='subitems'>
              <div className='subitem-img-text'> <CiCircleCheck className='icon'/> <span>Unlimitade Speaking Test Access</span></div>
              <div className='subitem-img-text'><CiCircleCheck className='icon' /><span>Unlimitade Writing Test Access</span></div>
              <div className='subitem-img-text'><CiCircleCheck className='icon' /><span>Analyze Your Answer</span></div>
              <div className='subitem-img-text'><CiCircleCheck className='icon' /><span>Check Bond Scos</span></div>

              <div className='priceButton'>
                  <span className='priceLabel'>Only @ <img className='rupeesimg' src="/pictures/icon-rs.png" alt="" /> 299</span>
                  <button onClick={byNow}><span>Buy Now</span> <img src="/pictures/ArrowCircleRight (1).png" alt="" /> </button>
              </div>
          </div>
      
    </div>
  )
}

export default Explore
