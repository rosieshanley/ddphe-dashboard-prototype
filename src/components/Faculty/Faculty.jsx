import React, { Component } from "react";
import { Link } from "react-router-dom";
import Controls from "components/Controls";

import logo from "assets/faculty.png";
import graph from "assets/data-comparison.png";

import "./Faculty.css";

class Faculty extends Component {
  render() {
    return (
      <div className="faculty">
        <div className="header">
          <Link to="/learn-more">
            <img
              src={logo}
              className="header__logo"
              alt="Denver Department of Public Health & Environment"
            />
          </Link>
          <div className="header__title">Today's Air Quality</div>
        </div>
        <div className="container">
          <div className="content">
            <img
              src={graph}
              className="graph"
              alt="Today's Air Quality Levels"
            />
          </div>
        </div>
        <Controls />
      </div>
    );
  }
}

export default Faculty;
