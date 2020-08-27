import React from 'react'
import Header from 'layouts/Header'
import Tabs from 'components/Tabs'
import InfiniteScrollNoLibrary from './no-library'
import InfiniteScrollerWithReactInfiniteScroller from './react-infinite-scroller'

import './style.scss'

export default function InfiniteScroll(props) {

  const parentPath = props.match.path;

  const tabsData = [
    {
      name: "No library",
      path: parentPath+"/no-library",
      component: InfiniteScrollNoLibrary,
      defaultTab: true
    },
    {
      name: "react-infinite-scroller",
      path: parentPath+"/react-infinite-scroller",
      component: InfiniteScrollerWithReactInfiniteScroller
    }
  ]

  return (
    <div>
      <Header postUrl="https://www.devaradise.com/react-infinite-scroll-tutorial"/>
      <div className="page-container container text-center">
        <div className="page-header">
          <h1 className="page-title">React - Infinite Scroll Examples<br/> with no library</h1>
          <p className="sub-title">by <a href="https://www.devaradise.com/about-syakir">Syakir Rahman</a></p>
        </div>
        <div className="page-content mini-container">
          <Tabs data={tabsData} parentPath={parentPath}></Tabs>
        </div>
      </div>

    </div>
  )
}
