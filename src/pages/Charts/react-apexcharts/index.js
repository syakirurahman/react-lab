import React from 'react'
import Chart from 'react-apexcharts'

const options = {
  chart: {
    id: 'apexchart-example'
  },
  xaxis: {
    categories: ['January', 'February', 'March', 'April', 'May', 'June']
  },
  colors: ['#FB8833', '#17A8F5']
}
  
const series = [
  {
    name: 'Sales',
    data: [21, 35, 75, 51, 41, 47]
  },
  {
    name: 'Leads',
    data: [41, 79, 57, 47, 63, 71]
  }
]

export default function ReactApexcharts() {
  return (
    <div className="row">
      <div className="col-md-12">
        <h2>Apexcharts.js charts wrapped with react-apexcharts</h2>
      </div>      

      <div className="section col-md-6">
        <h3 className="section-title">Line Chart</h3>
        <div className="section-content">
          <Chart options={options} series={series} type="line"/>
        </div>
      </div>

      <div className="section col-md-6">
        <h3 className="section-title">Bar Chart</h3>
        <div className="section-content">
          <Chart options={options} series={series} type="bar" />
        </div>
      </div>

    </div>
  )
}
