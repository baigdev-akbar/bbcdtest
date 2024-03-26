import React from 'react'
import { CiCircleCheck } from "react-icons/ci";
import Buynow from '../additionalpages/Buynow';
import checklist_2936769 from './checklist_2936769.png';
import icon_rs from './icon_rs.png';
import ArrowCircleRight1 from './ArrowCircleRight1.png';
import ArrowCircleRight from './ArrowCircleRight.png';

const Explr = () => {
    const byNow = () => {
        <Buynow />
        alert("To be implemented")
    }
    
    const start = () => {
        alert("Good Job");
    }
    return (
        <div className=' mob'>
            <div className='practiceMT'>
                <div className='checklist-image'>
                    <img src={checklist_2936769} alt="" />
                </div>
                <div className='title_phrase_text'>
                        <h3>Practice Mock Tests</h3>
                    <span>Get the authentic IELTS exam experience with all four modules covered</span>
                    </div>
                        <button className='btnStart' onClick={start}><img src={ArrowCircleRight} alt="" /></button>
                    </div>
      <div className='expolre mob'>
           

          <span className='exp-title'>Explore premium feetures with ease!</span>

          <div className='subitems '>
              <div className="checItems">
              <div className='subitem-img-text'> <CiCircleCheck className='icon'/> <span>Unlimitade Speaking Test Access</span></div>
              <div className='subitem-img-text'><CiCircleCheck className='icon' /><span>Unlimitade Writing Test Access</span></div>
              <div className='subitem-img-text'><CiCircleCheck className='icon' /><span>Analyze Your Answer</span></div>
              <div className='subitem-img-text'><CiCircleCheck className='icon' /><span>Check Bond Scos</span></div>
            </div>
              <div className='priceButton'>
                  <span className='priceLabel'>Only @ <img className='rupeesimg' src={icon_rs} alt="" /> 299</span>
                  <button onClick={byNow}><span>Buy Now</span> <img src={ArrowCircleRight1} alt="" /> </button>
              </div>
          </div>
      
    </div>
        </div>
  )
}

export default Explr
