import React, { Component } from "react";
import { Link } from "react-router-dom";
import Controls from "components/Controls";

import logo from "assets/parents.png";

import "./Parent.css";

class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <div className="header">
          <Link to="/learn-more">
            <img
              src={logo}
              className="header__logo"
              alt="Denver Department of Public Health & Environment"
            />
          </Link>
        </div>
        <Controls />
      </div>
    );
  }
}

export default Parent;
