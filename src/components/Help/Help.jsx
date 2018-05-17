import React, { Component } from "react";
import { Link } from "react-router-dom";
import Controls from "components/Controls";

import logo from "assets/parents.png";

import "./Help.css";

class Help extends Component {
  render() {
    return (
      <div className="help">
        <div className="header">
          <Link to="/learn-more">
            <img
              src={logo}
              className="header__logo"
              alt="Denver Department of Public Health & Environment"
            />
          </Link>
        </div>
        <div className="container">
          <div className="content">
            <div className="content__title">What can I do to help?</div>
            <br />
            <strong>When You Stop, Turn Your Engine Off!</strong>
            <br />
            Turning your engine off is one of the easiest and most efficient
            steps you can take to improve air quality. Whether you’re waiting in
            line to pick up your child from school or stuck waiting for a train
            — turn your engine off!
            <br />
            <strong>Burn Wise</strong>
            <br />
            During the wintertime, residential wood smoke is a main source of
            fine particle pollution and contributes to degraded air quality days
            in many areas across Colorado. Check for air quality advisories
            before you burn.<br />
            <br />
            <strong>Mow When the Sun is Low</strong>
            <br />
            By not mowing in the hot mid-day sun, you are also helping reduce
            the creation of harmful ground-level ozone, which can lead ti
            respiratory problems for sensitive populations.
          </div>
        </div>
        <Controls />
      </div>
    );
  }
}

export default Help;
