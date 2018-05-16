import React, { Component } from "react";
import { Link } from "react-router-dom";
import Controls from "components/Controls";

import logo from "assets/student.png";
import car from "assets/car.png";
import factory from "assets/factory.png";
import hellokitty from "assets/hellokitty.png";

import "./Pm.css";

class Pm extends Component {
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
            <div className="content__title">Particulate Matter</div>
            Have you ever noticed a sunbeam with lots of little specks of dust
            floating in it? That is particulate matter. Particulate matter is
            mostly dust and soot so small that it floats in the air. Soot comes
            from anybody burning anything. When you burn gasoline in your car
            engine or burn wood in a campfire, soot happens! Dust comes from
            lots of places, too. When a company's business is to grind things up
            very small or when someone drives down a dirt road, dust is thrown
            into the air. Soot and dust make the air look hazy.
          </div>
        </div>
        <Controls />
      </div>
    );
  }
}

export default Pm;
