import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const LineChartOptions = {
  title: {
    text: 'Line chart'
  },
  xAxis: {
    categories: ['January', 'February', 'March', 'April', 'May', 'June']
  },
  colors: ['#FB8833', '#17A8F5'],
  series: [
    {
      name: 'Sales',
      data: [21, 35, 75, 51, 41, 47]
    },
    {
      name: 'Leads',
      data: [41, 79, 57, 47, 63, 71]
    }
  ],
  credits: {
    enabled: false
  }
}

const BarChartOptions = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Bar Chart'
  },
  xAxis: {
    categories: ['January', 'February', 'March', 'April', 'May', 'June']
  },
  colors: ['#FB8833', '#17A8F5'],
  series: [
    {
      name: 'Sales',
      data: [21, 35, 75, 51, 41, 47]
    },
    {
      name: 'Leads',
      data: [41, 79, 57, 47, 63, 71]
    }
  ],
  credits: {
    enabled: false
  }
}

export default function HighchartsReactWrapper() {
  return (
    <div className="row">
      <div className="col-md-12">
        <h2>Hightcharts charts with highcharts-react</h2>
      </div>
      
      <div className="section col-md-6">
        <h3 className="section-title">Line Chart</h3>
        <div className="section-content">
          <HighchartsReact
            highcharts={Highcharts}
            options={LineChartOptions}
          />
        </div>
      </div>

      <div className="section col-md-6">
        <h3 className="section-title">Bar Chart</h3>
        <div className="section-content">
          <HighchartsReact
            highcharts={Highcharts}
            options={BarChartOptions}
          />
        </div>
      </div>

    </div>
  )
}
