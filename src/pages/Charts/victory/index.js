import React from 'react'
import { VictoryChart, VictoryLine, VictoryBar } from 'victory';

const sales = {
  style: {
    data: { 
      stroke: "#FB8833", // for Line chart
    },
    parent: { border: "1px solid #ccc"}
  },
  style2: {
    data: { 
      fill: "#FB8833" // for Bar chart
    },
    parent: { border: "1px solid #ccc"}
  },
  data: [
    { x: "January", y: 21 },
    { x: "February", y: 35 },
    { x: "March", y: 75 },
    { x: "April", y: 51 },
    { x: "May", y: 41 },
    { x: "June", y: 47 }
  ]
};

const leads = {
  style: {
    data: { 
      stroke: "#17A8F5", // for Line chart
    },
    parent: { border: "1px solid #ccc"}
  },
  style2: {
    data: { 
      fill: "#17A8F5" // for Bar chart
    },
    parent: { border: "1px solid #ccc"}
  },
  data: [
    { x: "January", y: 41 },
    { x: "February", y: 79 },
    { x: "March", y: 57 },
    { x: "April", y: 47 },
    { x: "May", y: 63 },
    { x: "June", y: 71 }
  ]
};
  

export default function Victory() {
  return (
    <div className="row">
      <div className="col-md-12">
        <h2>Charts with victory library</h2>
      </div>
      
      <div className="section col-md-6">
        <h3 className="section-title">Line Chart</h3>
        <div className="section-content">
          <VictoryChart padding={30}>
            <VictoryLine
              style={sales.style}
              data={sales.data}
            />
            <VictoryLine
              style={leads.style}
              data={leads.data}
            />
          </VictoryChart>
        </div>
      </div>

      <div className="section col-md-6">
        <h3 className="section-title">Bar Chart</h3>
        <div className="section-content">
          <VictoryChart padding={30}>
            <VictoryBar
              style={leads.style2}
              data={leads.data}
            />
            <VictoryBar 
              style={sales.style2}
              data={sales.data}
            />
          </VictoryChart>
        </div>
      </div>

    </div>
  )
}
