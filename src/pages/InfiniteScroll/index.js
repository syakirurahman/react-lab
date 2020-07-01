import React from 'react'
import Header from 'layouts/Header'
import Tabs from 'components/Tabs'
import { Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import InfiniteScrollNoLibrary from './no-library'

export default function InfiniteScroll(props) {

  const parentPath = props.match.path;

  const tabsData = [
    {
      name: "No library",
      path: parentPath+"/no-library",
      defaultTab: true
    }
  ]

  return (
    <div>
      <Helmet>
        <title>React - Infinite Scroll Examples with no Library</title>
        <meta name="description" content="React - Infinite Scroll Examples with and without Libraries to help you decide what is best for your application." />
      </Helmet>
      <Header/>
      {/* <Header postUrl="https://www.devaradise.com/react-datepicker-tutorial"/> */}
      <div className="page-container container text-center">
        <div className="page-header">
          <h1 className="page-title">React - Infinite Scroll Examples<br/> with no library</h1>
          <p className="sub-title">by <a href="https://www.devaradise.com/about-syakir">Syakir Rahman</a></p>
        </div>
        <div className="page-content mini-container">
          <Tabs data={tabsData} parentPath={parentPath}></Tabs>
          <Switch>
            <Route component={InfiniteScrollNoLibrary} exact path={[parentPath, parentPath+"/no-library"]}/>
          </Switch>
        </div>
      </div>

    </div>
  )
}
