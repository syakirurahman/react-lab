import React from 'react'
import { Line, Bar } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Sales',
      data: [21, 35, 75, 51, 41, 47],
      fill: false, // for Line chart
      backgroundColor: '#FB8833',
      borderColor: '#FB8833' // for Line chart
    },
    {
      label: 'Leads',
      data: [41, 79, 57, 47, 63, 71],
      fill: false, // for Line chart
      backgroundColor: '#17A8F5',
      borderColor: '#17A8F5' // for Line chart
    }
  ]
};

const options = {
  scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
  }
}

export default function ReactChartjs2() {
  return (
    <div className="row">
      <div className="col-md-12">
        <h2>Chart.js charts wrapped with react-chartjs-2</h2>
      </div>
      
      <div className="section col-md-6">
        <h3 className="section-title">Line Chart</h3>
        <div className="section-content">
          <Line data={data} options={options}/>
        </div>
      </div>

      <div className="section col-md-6">
        <h3 className="section-title">Bar Chart</h3>
        <div className="section-content">
          <Bar data={data}  options={options}/>
        </div>
      </div>

    </div>
  )
}
