import React from "react";
import "./style.css";
import { PricingCards } from "../../components/PricingCards";

export const Pricing = () => {
  return (
    <div className="pricing-container">
      <div className="heading-wrapper">
        <span className="pricing-heading">Pricing</span>
        <h1>Simple, transparent pricing</h1>
        <span className="text-color">
          We believe Untitled should be accessible to all companies, no matter
          the size.
        </span>
      </div>
      <PricingCards />
    </div>
  );
};
