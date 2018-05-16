import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import "./Controls.css";
import back from "assets/back.png";
import home from "assets/home.png";

class Controls extends Component {
  render() {
    return (
      <div className="controls">
        <img
          src={back}
          className="controls__icon"
          onClick={this.props.history.goBack}
          alt="Back"
        />
        <Link to="/">
          <img src={home} className="controls__icon" alt="Home" />
        </Link>
      </div>
    );
  }
}

export default withRouter(Controls);
