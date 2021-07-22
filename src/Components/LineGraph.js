import React from 'react';
import { Line } from 'react-chartjs-2';



const LineGraph = (props) => {
    
    return (
        <div
          style={{
              width:"650px",
              height:"650px",
              margin:"50px auto",
          }}
          >

            <Line data={{
                labels: props.xAxis.map(l=>l.substr(0,10)),
                datasets: [
                    {
                        label: 'corona virus live chart',
                        data: props.yAxis,
                        fill: false,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgba(255, 99, 132, 0.2)',
                    },
                ],
            }} />
        </div>
    )
}

export default LineGraph