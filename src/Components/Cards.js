import React from "react";
import CardItem from "./CardItem";
import "./Cards.scss";

import espresso from "../images/espresso.jpg";
import irish from "../images/irish.jpg";
import latte from "../images/latte.jpg";
import hotChocolate from "../images/hot-chocolate.jpg";
import smoothie from "../images/smoothie.jpg";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out our NEWEST products</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items-top">
            <CardItem
              src={espresso}
              title="Espresso"
              text="Get energized with a hot or cold espresso made in house."
              label="Quick"
              path="/services"
            />
            <CardItem
              src={latte}
              title="Latte"
              text="A delicious blend of espresso and milk to start your day off right."
              label="Speciality"
              path="/services"
            />
          </ul>
          <ul className="cards-items-bottom">
            <CardItem
              src={irish}
              title="Irish Coffee"
              text="Coffee with a little extra.  Made with our signature house blend and premium Irish whiskey."
              label="Adult"
              path="/services"
            />
            <CardItem
              src={hotChocolate}
              title="Hot Chocolate"
              text="Not a coffee drinker? Enjoy and nice cup of hot cocoa instead."
              label="Hot Drinks"
              path="/products"
            />
            <CardItem
              src={smoothie}
              title="Smoothie"
              text="A refreshing and healthy smoothie great for warm, summer days."
              label="Smoothies"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
