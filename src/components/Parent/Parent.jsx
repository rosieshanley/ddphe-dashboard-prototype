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
        <div className="container">
          <div className="content">
            <div className="content__title">
              How does air quality affect my child?
            </div>
            <br />
            Children are among the group of people who most often feel the
            impact of air pollution. Their bodies are still growing and they
            often play outside where the pollution levels can be high.<br />
            <br />
            The AQI is an index for reporting daily air quality. It indicates
            how clean or polluted your air is, and what associated health
            concerns you should be aware of. The AQI focuses on health effects
            that can happen within a few hours or days after breathing polluted
            air. EPA has assigned a specific color to each AQI category to make
            it easier for people to understand quickly the significance of air
            pollution levels in their communities. <br />
            <br />
            By using AQI colors, this dashboard shows how your child can
            moderate their activity to safely play outside when air pollution
            levels are elevated.
          </div>
        </div>
        <Controls />
      </div>
    );
  }
}

export default Parent;
