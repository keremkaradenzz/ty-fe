import React from "react";
import { FeedBacky } from "@keremkaradenzz/feedbacky-modal";

export const Home = () => {
  return (
    <div>
      <img
        src="https://blog.nesatilir.com/wp-content/uploads/2020/03/Trendyol-Entegrasyon.png"
        alt="trendyol"
      />
      <div>Welcome Home Page</div>

      <div>
        <h3>modal feedback is at the bottom right. {`:)`}</h3>
      </div>

      <FeedBacky />
    </div>
  );
};
