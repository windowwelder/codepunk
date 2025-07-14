import React from 'react';
import './SkullRain.css';

const SkullRain = ({ count = 50 }) => {
  return (
    <div className="rain-container">
      {Array.from({ length: count }).map((_, i) => {
        const delay = Math.random() * 2; // seconds
        const duration = 2 + Math.random() * 2; // seconds
        const left = Math.random() * 100; // %

        return (
          <div
  key={i}
  className="drop"
  style={{
    left: `${left}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  }}
>
  💀
</div>

        );
      })}
    </div>
  );
};

export default SkullRain;