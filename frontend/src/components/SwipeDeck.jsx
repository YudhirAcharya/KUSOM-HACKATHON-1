// SwipeDeck.jsx
import React, { useState } from "react";
import SwipeCard from "./SwipeCard";
import "./SwipeDeck.css";

const SwipeDeck = () => {
  const initialCards = [
    "Card 1",
    "Card 2",
    "Card 3",
    "Card 4",
  ];
  const [cards, setCards] = useState(initialCards);

  const handleGone = (index) => {
    setCards((prevCards) =>
      prevCards.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="swipe-deck">
      {cards.map((card, index) => (
        <SwipeCard
          key={index}
          index={index}
          data={card}
          handleGone={handleGone}
        />
      ))}
    </div>
  );
};

export default SwipeDeck;
