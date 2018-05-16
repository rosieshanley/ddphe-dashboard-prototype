import React, { Component } from "react";
import { Link } from "react-router-dom";
import Controls from "components/Controls";

import logo from "assets/student.png";
import car from "assets/car.png";
import factory from "assets/factory.png";
import hellokitty from "assets/hellokitty.png";
import correct from "assets/true.png";
import incorrect from "assets/false.png";

import "./Ozone.css";

class Ozone extends Component {
  state = {
    answer: null
  };

  updateAnswer(answer, text) {
    this.setState({
      answer: {
        correct: answer,
        text
      }
    });
  }

  render() {
    const answerDiv = (
      <div className="answer">
        <img
          className="answer__img"
          src={
            this.state.answer && this.state.answer.correct ? correct : incorrect
          }
        />
        {this.state.answer && this.state.answer.text}
      </div>
    );

    return (
      <div className="student">
        <div className="header">
          <Link to="/learn-more">
            <img src={logo} className="header__logo" alt="Student" />
          </Link>
        </div>
        <div className="container">
          <div className="content">
            <div className="content__title">Ozone</div>
            Ozone can be good or bad. It all depends on where it is. Ozone is
            good when it is high up in our atmosphere. It protects us from
            sunburn. Ozone is bad when it is near the ground where we can
            breathe it in. You can't see ozone in the air. Bad ozone is
            sometimes called smog. It is formed when chemicals coming out of
            cars and factories are cooked by the hot sun. Ozone is more of a
            problem in the summer.
          </div>
          <div className="content">
            <div className="content__subheader">
              Pick all the things that create bad ozone:
            </div>
            <div className="content__options">
              <div className="content__option">
                <img
                  className="content__option__img"
                  src={factory}
                  alt="factory"
                  onClick={() =>
                    this.updateAnswer(
                      true,
                      "Correct! Factories and chemical plants release nitrogen oxides that produce bad ozone in the presence of heat and sunlight."
                    )
                  }
                />
              </div>
              <div className="content__option">
                <img
                  className="content__option__img"
                  src={car}
                  alt="car"
                  onClick={() =>
                    this.updateAnswer(
                      true,
                      "Correct! Cars and trucks also release gases in the air that help form bad ozone."
                    )
                  }
                />
              </div>
              <div className="content__option">
                <img
                  className="content__option__img"
                  src={hellokitty}
                  alt="hello kitty"
                  onClick={() =>
                    this.updateAnswer(
                      false,
                      "Incorrect. Hello Kitty doesn't create bad ozone."
                    )
                  }
                />
              </div>
            </div>
            <div className="answer">{this.state.answer && answerDiv}</div>
          </div>
        </div>
        <Controls />
      </div>
    );
  }
}

export default Ozone;
