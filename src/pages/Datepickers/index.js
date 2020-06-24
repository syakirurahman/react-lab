import React from 'react'
import Header from 'layouts/Header'
import Tabs from 'components/Tabs'
import { Route, Switch } from 'react-router-dom'

import ReactDatepicker from './react-datepicker'
import ReactDates from './react-dates'
import ReactDayPicker from './react-day-picker'

export default function Datepickers(props) {

  const parentPath = props.match.path;

  const tabsData = [
    {
      name: "react-datepicker",
      path: parentPath+"/react-datepicker",
      defaultTab: true
    },
    {
      name: "react-dates",
      path: parentPath+"/react-dates",
    },
    {
      name: "react-day-picker",
      path: parentPath+"/react-day-picker"
    }
  ]

  return (
    <div>
      <Header postUrl="https://www.devaradise.com/react-datepicker-tutorial"/>

      <div className="page-container container text-center">
        <div className="page-header">
          <h1 className="page-title">React - Datepicker Examples<br/> with Top 3 Datepicker Libraries</h1>
          <p className="sub-title">by <a href="https://www.devaradise.com/about-syakir">Syakir Rahman</a></p>
        </div>
        <div className="page-content mini-container">
          <Tabs data={tabsData} parentPath={parentPath}></Tabs>
          <Switch>
            <Route component={ReactDatepicker} exact path={[parentPath, parentPath+"/react-datepicker"]}/>
            <Route component={ReactDates} path={parentPath+"/react-dates"}/>
            <Route component={ReactDayPicker} path={parentPath+"/react-day-picker"}/>
          </Switch>
        </div>
      </div>

    </div>
  )
}
