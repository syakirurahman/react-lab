import React from 'react'
import Header from 'layouts/Header'
import Tabs from 'components/Tabs'

import Recharts from './recharts';
import ReactChartjs2 from './react-chartjs-2';
import ReactApexcharts from './react-apexcharts';
import Victory from './victory';
import Nivo from './nivo';
import ReactVis from './react-vis';
import HighchartsReactWrapper from './highcharts-react';

export default function Charts(props) {
  const parentPath = props.match.path;

  const tabsData = [
    {
      name: "recharts",
      path: parentPath+"/recharts",
      component: Recharts,
      defaultTab: true
    },
    {
      name: "react-chartjs-2",
      path: parentPath+"/react-chartjs-2",
      component: ReactChartjs2
    },
    {
      name: "nivo",
      path: parentPath+"/nivo",
      component: Nivo
    },    
    {
      name: "highcharts-react",
      path: parentPath+"/highcharts-react",
      component: HighchartsReactWrapper
    },
    {
      name: "react-apexcharts",
      path: parentPath+"/react-apexcharts",
      component: ReactApexcharts
    },
    {
      name: "react-vis",
      path: parentPath+"/react-vis",
      component: ReactVis
    },
    {
      name: "victory",
      path: parentPath+"/victory",
      component: Victory
    }
  ]

  return (
    <div>
      <Header postUrl="https://www.devaradise.com/best-react-chart-graph-libraries"/>
      <div className="page-container container text-center">
        <div className="page-header">
          <h1 className="page-title">React - Chart / Graph Examples<br/> with 7 libraries</h1>
          <p className="sub-title">by <a href="https://www.devaradise.com/about-syakir">Syakir Rahman</a></p>
        </div>
        <div className="page-content container">
          <Tabs data={tabsData} parentPath={parentPath}></Tabs>
        </div>
      </div>

    </div>
  )
}