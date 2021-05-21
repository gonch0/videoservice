import React from "react";
import { NavLink } from "react-router-dom";

export default function Tabs() {
  return (
    <div className="tabs">
      <NavLink to="/" exact activeClassName="active" className="tabs__tab">
        Фильмы
      </NavLink>

      <NavLink to="/channels" exact activeClassName="active" className="tabs__tab">
        Телеканалы
      </NavLink>
    </div>
  );
}
