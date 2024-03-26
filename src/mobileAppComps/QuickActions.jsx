import React from 'react'
import Kid_Text_Removed from './Kid_Text_Removed.png'
import whatsapp from './whatsapp.png'
import youtube from './youtube.png';

const QuickActions = () => {
    const shared = () => {
        alert("App Shared");
    }
    const start = () => {
        alert("Good Job");
    }
  return (
      <div className='mob'>
          <span className='subTitle qick-title'>Quick Actions</span>
          <div className='utb-wtsp-sec'>
          <section className="modulesSec">
                    <div className='appGdVdo'><video src="https://youtu.be/coYJSbTdkug?si=ZJdVLJOFX6aqjlNi" poster={youtube}></video><span>App Guide Viseo</span></div>
                    {/* <div className='practiceMT'>
                        <h3>Practice Mock Tests</h3>
                        <span>Get the authentic IELTS exam experience with all four modules covered</span>
                        <button className='btnStart' onClick={start}>Start</button>
                    </div> */}
              </section>
              <section className="modulesSec">
                    <div className='appGdVdo'><video src="https://youtu.be/coYJSbTdkug?si=ZJdVLJOFX6aqjlNi" poster={whatsapp}></video><span>Help & Support</span></div>
                    {/* <div className='practiceMT'>
                        <h3>Practice Mock Tests</h3>
                        <span>Get the authentic IELTS exam experience with all four modules covered</span>
                        <button className='btnStart' onClick={start}>Start</button>
                    </div> */}
          </section>
          </div>
       <div className='blurbModule mob'>
              <img src={Kid_Text_Removed} alt="" />
              <div className='title-text-btn'>
                  <h3>One Share can save many lives</h3>
                  <span>Your one share can unlock a world of education for unprivileged.</span>
                  <button onClick={shared}>Share App</button>
              </div>
          </div>
    </div>
  )
}

export default QuickActions
