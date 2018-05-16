import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "assets/student.png";
import good from "assets/good.png";
import medium from "assets/medium.png";
import bad from "assets/bad.png";

import "./Aqi.css";

const Aqi = () => (
  <div className="aqi">
    <div className="header">
      <img src={logo} alt="Denver Department of Public Health & Environment" />
      <div className="header__title">What does "AQI" mean?</div>
    </div>
    <div className="content">
      The AQI is a number that tells us how dirty the air is. Just like the
      temperature is a number that tells us how cold or hot it is. The AQI also
      uses colors to tell us if the air is too unhealthy to play outside.
      <div className="content-container">
        <div className="content-container__row">
          <div className="content-container__row__image">
            <img src={good} alt="student" />
          </div>
          <div className="content-container__row__text">
            When the AQI is Green, the air is clean!
          </div>
        </div>
        <div className="content-container__row">
          <div className="content-container__row__image">
            <img src={medium} alt="parent" />
          </div>
          <div className="content-container__row__text">
            When the AQI is Yellow, you should take it easy when you play
            outside.
          </div>
        </div>
        <div className="content-container__row">
          <div className="content-container__row__image">
            <img src={bad} />
          </div>
          <div className="content-container__row__text">
            When the AQI is Red, you should not go outside to play.
          </div>
        </div>
        <div className="content-container__row">
          <div className="content-container__row__image" />
          <div className="content-container__row__text">
            Dirty air can make you feel sick!{" "}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Aqi;
