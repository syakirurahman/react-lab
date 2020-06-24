import React from "react";
import { NavLink } from "react-router-dom";
import propTypes from "prop-types";
import "./style.scss";

export default function Tabs(props) {
  if (!props.data || !Array.isArray(props.data)) return null;

  return (
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
  );
}

Tabs.propTypes = {
  data: propTypes.array.isRequired,
  parentPath: propTypes.string.isRequired,
};
