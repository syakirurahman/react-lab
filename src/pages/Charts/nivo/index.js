import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { ResponsiveBar } from '@nivo/bar'

const data = [
  {
    id: 'sales',
    color: '#FB8833',
    data: [
      { x: "January", y: 21 },
      { x: "February", y: 35 },
      { x: "March", y: 75 },
      { x: "April", y: 51 },
      { x: "May", y: 41 },
      { x: "June", y: 47 }
    ]
  },
  {
    id: 'leads',
    color: '#17A8F5',
    data: [
      { x: "January", y: 41 },
      { x: "February", y: 79 },
      { x: "March", y: 57 },
      { x: "April", y: 47 },
      { x: "May", y: 63 },
      { x: "June", y: 71 }
    ]
  }
];

const databar = [
  { label: 'January', sales: 21, leads: 41 },
  { label: 'February', sales: 35, leads: 79 },
  { label: 'March', sales: 75, leads: 57 },
  { label: 'April', sales: 51, leads: 47 },
  { label: 'May', sales: 41, leads: 63 },
  { label: 'June', sales: 47, leads: 71 }
]

export default function Nivo() {
  return (
    <div className="row">
      <div className="col-md-12">
        <h2>Charts with nivo library</h2>
      </div>
      
      <div className="section col-md-6">
        <h3 className="section-title">Line Chart</h3>
        <div className="section-content" style={{height:'300px'}}>
          {/* 
          // make sure parent container have a defined height when using
          // responsive component, otherwise height will be 0 and
          // no chart will be rendered. */}
          <ResponsiveLine
            data={data}
            margin={{ top: 30, right: 60, bottom: 60, left: 30 }}
            axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Month',
              legendOffset: 36,
              legendPosition: 'middle'
            }}
            colors={d => d.color}
            pointSize={7}
            pointBorderWidth={2}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
              {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
              }
            ]}
          />
        </div>
      </div>

      <div className="section col-md-6">
        <h3 className="section-title">Bar Chart</h3>
        <div className="section-content" style={{height:'300px'}}>
          {/* 
          // make sure parent container have a defined height when using
          // responsive component, otherwise height will be 0 and
          // no chart will be rendered. */}
          <ResponsiveBar
            data={databar}
            keys={[ 'sales', 'leads' ]}
            indexBy="label"
            groupMode="grouped"
            margin={{ top: 30, right: 130, bottom: 50, left: 30 }}
            padding={0.3}
            colors={['#FB8833', '#17A8F5']}
            legends={[
              {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
              }
            ]}
            animate={true}
          />
        </div>
      </div>

    </div>
  )
}