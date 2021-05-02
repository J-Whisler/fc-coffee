import React from "react";
import { Link } from "react-router-dom";
import "./Cards.scss";

const CardItem = ({ path, label, src, text, title }) => {
  return (
    <>
      <li className="cards-item">
        <Link className="cards-item-link" to={path}>
          <figure className="cards-item-pic-wrap" data-category={label}>
            <img
              src={src}
              alt="Forest City Coffee"
              className="cards-item-img"
            />
          </figure>
          <div className="cards-item-info">
            <h2 className="cards-item-title">{title}</h2>
            <h5 className="cards-item-text">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
};

export default CardItem;
