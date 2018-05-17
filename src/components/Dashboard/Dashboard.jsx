import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "assets/student.png";
import good from "assets/good.png";
import medium from "assets/medium.png";
import swansea from "assets/swansea.jpg";
import ddphe from "assets/logo.jpg";

import "./Dashboard.css";

const Dashboard = () => (
  <div className="dashboard">
    <div className="dashboard__panel lt school-overview">
      <img className="logo" src={swansea} alt="Swansea Elementary" />
      <div className="school-overview__score">Today's Air Quality: Good</div>
      <div className="school-overview__score-subtitle">
        Today is a good day to be outside!
      </div>
      <div className="dashboard__graph__title">Today's PM10 Levels</div>
    </div>
    <div className="dashboard__panel rt">
      <div className="rating-panel">
        <div className="rating-panel__title">
          <div>
            Alert Level μm/m<sup>3</sup>
          </div>
        </div>
        <div className="rating-panel__row">
          <div className="rating-panel__row__item">100+</div>
          <div className="rating-panel__row__item">Bad</div>
          <div className="rating-panel__row__item">
            0 days <span className="subtitle">(30 day history)</span>
          </div>
        </div>
        <div className="rating-panel__row">
          <div className="rating-panel__row__item">50-100</div>
          <div className="rating-panel__row__item">Moderate</div>
          <div className="rating-panel__row__item">
            2 days <span className="subtitle">(30 day history)</span>
          </div>
        </div>
        <div className="rating-panel__row">
          <div className="rating-panel__row__item">0-50</div>
          <div className="rating-panel__row__item">Good</div>
          <div className="rating-panel__row__item">
            28 days <span className="subtitle">(30 day history)</span>
          </div>
        </div>
      </div>
    </div>
    <div className="dashboard__panel lb">
      <iframe
        className="dashboard__graph"
        width="800"
        height="600"
        src="https://app.powerbi.com/view?r=eyJrIjoiNGVlNDE0ZTctNjQ2OS00NWNjLTg4ZDktNDVkMmU4NzVjNTUyIiwidCI6IjljYTc1MTI4LWEyNDQtNDU5Ni04NzdiLWYyNDgyOGU0NzZlMiIsImMiOjZ9"
        frameborder="0"
        allowFullScreen="true"
      />
    </div>
    <Link to="/learn-more">
      <div className="dashboard__panel call-to-action rb ">
        <img className="logo--br" src={ddphe} alt="Swansea Elementary" />
        <div>Click to Learn More!</div>
      </div>
    </Link>
  </div>
);

export default Dashboard;
