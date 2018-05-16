import React, { Component } from "react";
import { Link } from "react-router-dom";
import Controls from "components/Controls";

import logo from "assets/student.png";
import teach from "assets/teach.png";
import test from "assets/test.png";

import "./Test.css";

class Test extends Component {
  render() {
    return (
      <div className="student">
        <div className="header">
          <Link to="/learn-more">
            <img
              src={logo}
              className="header__logo"
              alt="Denver Department of Public Health & Environment"
            />
          </Link>
        </div>
        <div className="action-container" />
        <Controls />
      </div>
    );
  }
}

export default Test;
