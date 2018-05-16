import React, { Component } from "react";
import { Link } from "react-router-dom";
import Controls from "components/Controls";

import logo from "assets/student.png";
import teach from "assets/teach.png";
import test from "assets/test.png";

import "./Student.css";

class Student extends Component {
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
        <div className="action-container">
          <div className="action">
            <Link to="study">
              <img
                src={teach}
                className="action__button"
                alt="Denver Department of Public Health & Environment"
              />
              <div className="action__title">Teach Me</div>
            </Link>
          </div>
          <div className="action">
            <Link to="test">
              <img
                src={test}
                className="action__button"
                alt="Denver Department of Public Health & Environment"
              />
              <div className="action__title">Test Me</div>
            </Link>
          </div>
        </div>
        <Controls />
      </div>
    );
  }
}

export default Student;
