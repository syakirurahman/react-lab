import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

export default function RoutedTabsDynamic(props) {
  const parentPath = props.match.path;

  const tabsData = [
    {
      label: "Tab 1",
      path: parentPath+"/tab-1",
      content: (<div className="tab-content">
        <h2>Tab content 1</h2>
        <p>Here is your tab content. You can separate this as a component.</p>
        <p>Lorem ipsum dolor sit amet ...</p>
      </div>),
      defaultTab: true
    },
    {
      label: "Tab 2",
      path: parentPath+"/tab-2",
      content: (<div className="tab-content">
        <h2>Tab content 2</h2>
        <p>Here is your tab content. You can separate this as a component.</p>
        <p>Lorem ipsum dolor sit amet ...</p>
      </div>),
    },
    {
      label: "Tab 3",
      path: parentPath+"/tab-3",
      content: (<div className="tab-content">
        <h2>Tab content 3</h2>
        <p>Here is your tab content. You can separate this as a component.</p>
        <p>Lorem ipsum dolor sit amet ...</p>
      </div>),
    }
  ]
  
  
  return (
    <div className="routed-tabs">
      <h1>Routed Tabs</h1>
      <div className="tabs">
        
        {tabsData.map((data, i) => {
          return (
            <NavLink
              key={i}
              to={data.path}
              activeClassName="active"
              isActive={(match, location) =>
                data.defaultTab
                  ? [parentPath, data.path].includes(location.pathname)
                  : [data.path].includes(location.pathname)
              }
            >
              {data.label}
            </NavLink>
          );
        })}

      </div>
      
      <Switch>
        {tabsData.map((data, i) => {
          return (
            <Route 
              key={i}
              component={() => data.content} 
              exact 
              path={
                data.defaultTab
                  ? [parentPath, data.path]
                  : [data.path]
              }
            />
          );
        })}
      </Switch>
    </div>
  )
}
