import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import propTypes from "prop-types";
import "./style.scss";

export default function Tabs(props) {
  if (!props.data || !Array.isArray(props.data)) return null;

  return (
    <div>
      <div className="app-tabs">
        {props.data.map((data, i) => {
          return (
            <NavLink
              key={i}
              to={data.path}
              activeClassName="active"
              isActive={(match, location) =>
                data.defaultTab
                  ? [props.parentPath, data.path].includes(location.pathname)
                  : [data.path].includes(location.pathname)
              }
            >
              {data.name}
            </NavLink>
          );
        })}
      </div>
      <Switch>
        {props.data.map((data, i) => {
          
          // nested dynamic tabs doesn't work for routed-tabs

          if(data.component) {
            return (
              <Route 
                key={i}
                component={data.component} 
                exact 
                path={
                  data.defaultTab
                    ? [props.parentPath, data.path]
                    : [data.path]
                }
              />
            );  
          } else {
            return null;
          }
        })}
      </Switch>
    </div>

  );
}

Tabs.propTypes = {
  data: propTypes.array.isRequired,
  parentPath: propTypes.string.isRequired,
};
