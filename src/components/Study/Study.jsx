import React, { Component } from "react";
import { Link } from "react-router-dom";
import Controls from "components/Controls";

import logo from "assets/student.png";
import teach from "assets/teach.png";
import test from "assets/test.png";

import "./Study.css";

class Study extends Component {
  render() {
    return (
      <div className="student">
        <div className="header">
          <Link to="/learn-more">
            <img src={logo} className="header__logo" alt="Student" />
          </Link>
        </div>
        <div className="container">
          <div className="content">
            <div className="content__title">What is air pollution?</div>
            Stuff in the air that causes air pollution are called "pollutants."<br />
            <Link to="ozone">Ozone</Link> and{" "}
            <Link to="particulate-matter">Particulate Matter</Link> are two
            pollutants that make up most of the air pollution in our country.
          </div>
          <div className="content">
            <div className="content__title">Why is it bad?</div>
            Some particles in the air are so small you can't see them. It is not
            good for you to breathe in too much of the tiny particulate matter.
            Particles in the air can make you cough. Particulate matter can also
            make it hard for you to take a deep breath and you might get more
            colds. If you already have asthma or problems with your heart,
            particulate matter could make you sick enough to go to the hospital.
            To reduce exposure to particulate matter when the AQI is orange or
            worse, don't play near streets with heavy traffic. Heavy traffic
            areas are highways and busy streets where there are a lot of cars,
            buses, and trucks.
          </div>
        </div>
        <Controls />
      </div>
    );
  }
}

export default Study;
