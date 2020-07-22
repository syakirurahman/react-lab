import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

export default function RoutedTabs(props) {
  const parentPath = props.match.path;
  
  return (
    <div className="routed-tabs">
      <h1>Routed Tabs</h1>
      <div className="tabs">
        <NavLink
          to={parentPath+'/tab-1'}
          activeClassName="active"
          isActive={(match, location) =>
              [parentPath, parentPath+'/tab-1'].includes(location.pathname)
          }
        >
          Tab 1
        </NavLink>
        <NavLink
          to={parentPath+'/tab-2'}
          activeClassName="active"
          isActive={(match, location) =>
              [parentPath+'/tab-2'].includes(location.pathname)
          }
        >
          Tab 2
        </NavLink>
        <NavLink
          to={parentPath+'/tab-3'}
          activeClassName="active"
          isActive={(match, location) =>
              [parentPath+'/tab-3'].includes(location.pathname)
          }
        >
          Tab 3
        </NavLink>
      </div>
      
      <Switch>
        <Route component={
          () => (<div className="tab-content">
            <h2>Tab content 1</h2>
            <p>Here is your tab content. You can separate this as a component.</p>
            <p>Lorem ipsum dolor sit amet ...</p>
          </div>)
        } exact path={[parentPath, parentPath+"/tab-1"]}/>

        <Route component={
          () => (<div className="tab-content">
            <h2>Tab content 2</h2>
            <p>Here is your tab content. You can separate this as a component.</p>
            <p>Lorem ipsum dolor sit amet ...</p>
          </div>)
        } path={[parentPath+"/tab-2"]}/>

        <Route component={
          () => (<div className="tab-content">
            <h2>Tab content 3</h2>
            <p>Here is your tab content. You can separate this as a component.</p>
            <p>Lorem ipsum dolor sit amet ...</p>
          </div>)
        } path={[parentPath+"/tab-3"]}/>

      </Switch>
    </div>
  )
}
