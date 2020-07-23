import React from 'react'
import Header from 'layouts/Header'
import Tabs from 'components/Tabs'
import { Route, Switch } from 'react-router-dom'
import WithStateHook from './with-state-hook'
import RoutedTabsDynamic from './routed-tabs/dynamic'
import WithReactTabs from './with-react-tabs'

import './style.scss'

export default function ReactTabs(props) {
  const parentPath = props.match.path;

  const tabsData = [
    {
      name: "With State Hook",
      path: parentPath+"/with-state-hook",
      defaultTab: true
    },
    {
      name: "Routed Tabs",
      path: parentPath+"/routed-tabs"
    },
    {
      name: "With react-tabs",
      path: parentPath+"/with-react-tabs"
    }
  ]

  return (
    <div className="react-tabs">
      <Header postUrl="https://www.devaradise.com/react-tabs-tutorial"/>
      <div className="page-container container">
        <div className="page-header text-center">
          <h1 className="page-title">React - Tabs Examples<br/> with 3 Ways to Implement</h1>
          <p className="sub-title">by <a href="https://www.devaradise.com/about-syakir">Syakir Rahman</a></p>
        </div>
        <div className="page-content mini-container">
          <Tabs data={tabsData} parentPath={parentPath}></Tabs>
          <Switch>
            <Route component={WithStateHook} exact path={[parentPath, parentPath+"/with-state-hook"]}/>
            <Route component={RoutedTabsDynamic} path={[parentPath+"/routed-tabs"]}/>
            <Route component={WithReactTabs} path={[parentPath+"/with-react-tabs"]}/>
          </Switch>
        </div>
      </div>

    </div>
  )
}
