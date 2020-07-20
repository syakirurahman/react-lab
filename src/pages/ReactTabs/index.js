import React from 'react'
import Header from 'layouts/Header'
import Tabs from 'components/Tabs'
import { Route, Switch } from 'react-router-dom'
import SimpleTabs from './simple-tabs'
import RoutedTabs from './routed-tabs'
import WithReactTabs from './with-react-tabs'

export default function ReactTabs(props) {
  const parentPath = props.match.path;

  const tabsData = [
    {
      name: "Simple Tabs",
      path: parentPath+"/simple-tabs",
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
    <div>
      <Header postUrl="https://www.devaradise.com/react-tabs-tutorial"/>
      <div className="page-container container text-center">
        <div className="page-header">
          <h1 className="page-title">React - Tabs Examples<br/> with 3 Ways to Implement</h1>
          <p className="sub-title">by <a href="https://www.devaradise.com/about-syakir">Syakir Rahman</a></p>
        </div>
        <div className="page-content mini-container">
          <Tabs data={tabsData} parentPath={parentPath}></Tabs>
          <Switch>
            <Route component={SimpleTabs} exact path={[parentPath, parentPath+"/simple-tabs"]}/>
            <Route component={RoutedTabs} path={[parentPath+"/routed-tabs"]}/>
            <Route component={WithReactTabs} path={[parentPath+"/with-react-tabs"]}/>
          </Switch>
        </div>
      </div>

    </div>
  )
}
