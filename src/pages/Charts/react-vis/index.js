import React from 'react'
import '../../../../node_modules/react-vis/dist/style.css';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineMarkSeries, VerticalBarSeries } from 'react-vis';

const data = {
  sales : [
    { x: "January", y: 21 },
    { x: "February", y: 35 },
    { x: "March", y: 75 },
    { x: "April", y: 51 },
    { x: "May", y: 41 },
    { x: "June", y: 47 }
  ],
  leads : [
    { x: "January", y: 41 },
    { x: "February", y: 79 },
    { x: "March", y: 57 },
    { x: "April", y: 47 },
    { x: "May", y: 63 },
    { x: "June", y: 71 }
  ]
}

export default function ReactVis() {
  return (
    <div className="row">
      <div className="col-md-12">
        <h2>Charts with react-vis library</h2>
      </div>
      
      <div className="section col-md-6">
        <h3 className="section-title">Line Chart</h3>
        <div className="section-content">
          <XYPlot 
            xType="ordinal"
            width={500}
            height={300}>
            <XAxis />
            <YAxis />
            <VerticalGridLines />
            <HorizontalGridLines />
            <LineMarkSeries
              data={data.sales}
              color="#FB8833"
              />
            <LineMarkSeries
              data={data.leads}
              color="#17A8F5"
              />
          </XYPlot>
        </div>
      </div>

      <div className="section col-md-6">
        <h3 className="section-title">Bar Chart</h3>
        <div className="section-content">
          <XYPlot 
            xType="ordinal"
            width={500}
            height={300}>
            <XAxis />
            <YAxis />
            <VerticalGridLines />
            <HorizontalGridLines />
            <VerticalBarSeries
              data={data.sales}
              color="#FB8833"
              />
            <VerticalBarSeries
              data={data.leads}
              color="#17A8F5"
              />
          </XYPlot>
        </div>
      </div>

    </div>
  )
}
