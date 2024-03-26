

import React, { useEffect } from 'react'
import { Line, Bar, } from 'react-chartjs-2';
import { scales,
    Chart as
        chartjs,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement,
    RadialLinearScale,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

chartjs.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    RadialLinearScale,
    Filler,
    Tooltip,
    Legend
)

const LineChrt = () =>  {

    const data = {
        labels: [" 16 Feb ", " 17 Feb "," 18 Feb "," 19 Feb "," 20 Feb "," 21 Feb "," 22 Feb ",],
        datasets: [
            {
                data: [5.0,6.5,5.4,7.5,8.5,8.0,9.0,9.5,10.0,10.5,11.0],
                backgroundColor:'rgba(5, 43, 1,52)' ,
                              borderColor: 'rgb(59, 43, 218)',
                              
                              borderWidth: 1.8,
                              pointBackgroundColor: 'rgb(59, 43, 218)',
                              pointBorderColor: '#9aefff',
                              pointBorderWidth: 2,
                              capBezierPoints: true,
                              pointStyle: 'circle',
                                pointRadius: 5,
                                pointHoverRadius: 15,
                                lineTension: 0.5,
                                
                                   
                                
            },
            
           
        ],
        
        
    };
    const options = {
        
        plugins: {
            legend: false,
            
        },
        scales: {
            
            x: {
                min: 0,
                max: 9,
                ticks: {
                    stepSize: 5,
                    
                },
                grid: {
                    display:false
                }
            },
            y: {
                min: 4,
                max: 10,
                ticks: {
                    stepSize: 1,
                    
                },
                grid: {
                    color:'rgb(240, 240, 240)',

                    
                }
            }
        }
    };
  return (
    <div>
      <Line data={data} options={options} ></Line>
    </div>
  )
}

export default LineChrt
