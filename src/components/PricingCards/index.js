import React from "react";
import { PricingCardsData } from "../../assets/constant";
import "./style.css";

export const PricingCards = () => {
  return (
    <div className="pricingcards-container">
      {PricingCardsData.map((cardsData) => {
        return (
          <div className="each-card-container">
            <h1>{cardsData.price}</h1>
            <span className="plan-span">{cardsData.plan}</span>
            <p className="text-color card-bill">{cardsData.bill}</p>
            <div className="featuresData-container">
              {cardsData.features.map((featuresData) => {
                return (
                  <div className="feature-container">
                    <span>{featuresData.icon}</span>
                    <span className="feature-points text-color">
                      {featuresData.points}
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              {/* <a aria-roledescription="button">Get started</a> */}
              <button
                role="button"
                aria-labelledby="button-label"
                className="card-button"
              >
                Get started
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
