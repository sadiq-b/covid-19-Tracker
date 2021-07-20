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
                labels: ['January', 'February', 'March', 'April', '5', '6'],
                datasets: [
                    {
                        label: 'covid dataset',
                        data: [12, 19, 3, 5, 2, 3],
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