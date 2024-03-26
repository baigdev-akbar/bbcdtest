import { Chart, scales } from 'chart.js';
import React from 'react'
// import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import datafile from '/src/dataFiles/datafile.json';
import datafile1 from '/src/dataFiles/datafile1.json';

import {Chart as
    ChartJS,
        LineElement,
        CategoryScale, 
        LinearScale,
        PointElement,defaults
    } from 'chart.js/auto';

import LineChrt from '../chartComponents/LineChrt';
import LineChartMobile from '../chartComponents/LineChartMobile';
        
    ChartJS.register(
        LineElement,
            CategoryScale,
            LinearScale,
            PointElement
    )


defaults.maintainAspectRatio = false;
defaults.responsive = true;



const YourProgressSummary = () => {
    const shared = () => {
        alert("App Shared");
    }
    const check = ()=> {
        alert("Thanks for checking");
    }
  return (
      <div className=''>
          
          <div className="mob">
            <div className='mobileLabel'>
            <div className='mobileLabel1'>
              <span>How many students we helped</span>
              <button onClick={check}>Check</button>
              </div>
            </div>
          </div>
          
          {/* For Desk tob */}
          <div class="desk">
              
          <span className='subTitle'>Your Progress Summary</span>
          
          <div className='homechart-image '>
          <div className='labelandcharWrap'>
              <div className='graphChart '>
                  
                  {/* Chart Label */}
                  <div className='chartLabelWrap desk'>
                      <div className='chartLabelrow'>
                          <div className='chartLabelLine'>
                              <span className='charttext1'>Wow!</span><span className='charttext2'> you're about to reach your targeted band</span>
                          </div>
                      </div>
                  </div>
                  <div className='linechartRow'>
                              <div className='lineChart'>
                                  
                                  <LineChrt/>
                                  
                  {/* <Line data={{
                      //   labels: ["5.0", "6.0", "6.5","7.0","8.0","8.5","9.0","9.5","10.0","10.5","11.0"],
                      labels: datafile.map((data)=>data.label),
                      datasets: [
                          {
                              label: '',
                              data: datafile.map((data) => data.value),
                              backgroundColor:'rgba(5, 43, 1,52)' ,
                              borderColor: 'rgb(59, 43, 218)',
                              tension: 0.2,
                              borderWidth: 1.8,
                              pointBackgroundColor: 'rgb(59, 43, 218)',
                              pointBorderColor: '#9aefff',
                              pointBorderWidth: 2,
                              capBezierPoints: true,
                              pointStyle: 'circle',
                                pointRadius: 5,
                                pointHoverRadius: 15,
                             
                              
                                
                                
                          },
                          
                          

                      ],
                      
                     
                      
                     
                      
                  }}
                      
                      
                      
                      /> */}
                      </div>
                      </div>
                    
                  

              </div>
              </div>

          <div className='blurbModule desk'>
              <img src="/pictures/Frame 427319170.png" alt="" />
              <div className='title-text-btn'>
                  <h3>One Share can save many lives</h3>
                  <span>Your one share can unlock a world of education for unprivileged.</span>
                  <button onClick={shared}>Share App</button>
              </div>
              </div>
             
          </div>

          </div>

          {/* For Mobile */}
          <div className='mob box-fix'>
          <div className='labelandcharWrap'>
          <span className='subTitle'>Your Progress Summary</span>
          
          <div className='homechart-image '>
          
              <div className='graphChart '>
                  
                  {/* Chart Label */}
                  
                  <div className='linechartRow'>
                  <div className='lineChart'>
                    
                    <LineChartMobile/>
                  {/* <Line data={{
                      //   labels: ["5.0", "6.0", "6.5","7.0","8.0","8.5","9.0","9.5","10.0","10.5","11.0"],
                      labels: datafile1.map((data)=>data.label),
                      datasets: [
                          {
                              label: '',
                              data: datafile.map((data) => data.value),
                              backgroundColor:'rgba(5, 43, 1,52)' ,
                              borderColor: 'rgb(59, 43, 218)',
                              tension: .5,
                              borderWidth: 1.8,
                              pointBackgroundColor: 'rgb(59, 43, 218)',
                              pointBorderColor: '#9aefff',
                              pointBorderWidth: 2,
                              capBezierPoints: true,
                              pointStyle: 'circle',
                                pointRadius: 5,
                                pointHoverRadius: 15,
                             
                              
                                
                                
                          },
                          
                          

                      ],
                      
                      options: {
                        plugins: {
                              line: {
                              tension:0.5,
                          }
                          }
                          
                      }
                     
                      
                  }}
                      
                      
                      
                      /> */}
                      </div>
                      </div>
                      <div className='chartLabelWrap mob'>
                      <div className='chartLabelrow'>
                          <div className='chartLabelLine'>
                              <span className='charttext1'>Wow!</span><span className='charttext2'> you're about to reach your targeted band</span>
                          </div>
                      </div>
                  </div>
                  

              </div>
              </div>

          <div className='blurbModule desk'>
              <img src="/pictures/Frame 427319170.png" alt="" />
              <div className='title-text-btn'>
                  <h3>One Share can save many lives</h3>
                  <span>Your one share can unlock a world of education for unprivileged.</span>
                  <button onClick={shared}>Share App</button>
              </div>
              </div>
             
          </div>

          </div>{/* ... */}
    </div>
  )
}

export default YourProgressSummary
