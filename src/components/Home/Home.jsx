import React from "react";
import { Link } from "react-router-dom";
import Controls from "components/Controls";

import swansea from "assets/swansea.jpg";
import student from "assets/student.png";
import parent from "assets/parents.png";
import faculty from "assets/faculty.png";

import "./Home.css";

const Home = () => (
  <div className="home">
    <Link to="/">
      <div className="header">
        <img
          src={swansea}
          className="header__logo"
          alt="Denver Department of Public Health & Environment"
        />
      </div>
    </Link>
    <div className="home__menu">
      <Link to="/student">
        <div className="home__menu-item">
          <div className="home__menu-item__image">
            <img src={student} alt="student" />
          </div>
          <div className="home__menu-item__text">I am a student</div>
        </div>
      </Link>
      <Link to="/parent">
        <div className="home__menu-item">
          <div className="home__menu-item__image">
            <img src={parent} alt="parent" />
          </div>
          <div className="home__menu-item__text">I am a parent</div>
        </div>
      </Link>{" "}
      <Link to="/faculty">
        <div className="home__menu-item">
          <div className="home__menu-item__image">
            <img src={faculty} />
          </div>
          <div className="home__menu-item__text">I am a faculty member</div>
        </div>
      </Link>
    </div>
    <Controls />
  </div>
);

export default Home;
