// SwipeCard.jsx
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-use-gesture";
import "./SwipeCard.css";

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = { rot: 0, scale: 1.5, y: -1000 };

const SwipeCard = ({ data, index, handleGone }) => {
  const [gone] = useState(() => new Set());
  const [props, set] = useSpring(() => ({
    ...to(index),
    from,
  }));

  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      direction: [xDir],
      velocity,
    }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
      if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we add this card to the gone set
      set((i) => {
        if (index !== i) return; // We're only interested in changing the dragged card
        const isGone = gone.has(index);
        const x = isGone
          ? (200 + window.innerWidth) * dir
          : down
          ? xDelta
          : 0; // When a card is gone it flies out left or right, otherwise goes back to zero
        const rot =
          xDelta / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          config: {
            friction: 50,
            tension: down ? 800 : isGone ? 200 : 500,
          },
        };
      });
      if (!down && gone.size === 1) handleGone(index); // When all cards are gone this should trigger
    }
  );

  return (
    <animated.div
      key={index}
      {...bind(index)}
      style={{
        transform:
          props.x.interpolate(
            (x) => `translate3d(${x}px,0,0)`
          ) +
          props.rot.interpolate((r) => ` rotate(${r}deg)`) +
          props.scale.interpolate((s) => ` scale(${s})`),
      }}
      className="swipe-card"
    >
      <div className="card-content">{data}</div>
    </animated.div>
  );
};

export default SwipeCard;
