import React from "react";
import "../App.css";

import Button from "./Button";

import "./Showcase.scss";

const Showcase = () => {
  return (
    <div className="showcase-container">
      <div className="fccc">
        <div className="fccc-top">
          <h2>Forest City</h2>
        </div>
        <div className="fccc-middle">
          <h4>Coffee</h4>
        </div>
        <div className="fccc-bottom">
          <p>
            Everyday is a good day for <span>Coffee</span>.
          </p>
        </div>
      </div>
      <div className="showcase-btns">
        <Button
          className="btns btn-outline"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
        <Button
          className="btns btn-primary"
          buttonSize="btn--large"
          buttonStyle="btn--primary"
        >
          Watch our video <i className="far fa-play-circle"></i>
        </Button>
      </div>
    </div>
  );
};

export default Showcase;
