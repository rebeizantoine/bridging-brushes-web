import React, { useState, useEffect } from "react";
import "../Styles/counter.css";
import painting from "../Images/painting.png";
import sculptors from "../Images/sculptors.png";
import exhibitions from "../Images/exhibitions.png";
import artists from "../Images/artists.png";

const Counter = () => {
  const startCountAnimation = (targetId, targetValue, duration) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) {
      console.error(`Element with ID ${targetId} not found.`);
      return;
    }

    const startTime = performance.now();
    const increment = targetValue / (duration * 1000); // Calculate increment per millisecond

    const updateCounter = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const currentValue = Math.min(targetValue, elapsedTime * increment);
      targetElement.textContent = Math.round(currentValue);

      if (currentValue < targetValue) {
        requestAnimationFrame(updateCounter);
      } else {
        targetElement.textContent = targetValue;
      }
    };

    requestAnimationFrame(updateCounter);
  };

  useEffect(() => {
    // Start counting animations when the component mounts
    startCountAnimation("paintingCount", 25, 4); // 4 seconds duration
    startCountAnimation("sculptorsCount", 25, 4); // 4 seconds duration
    startCountAnimation("exhibitionsCount", 25, 4); // 4 seconds duration
    startCountAnimation("artistsCount", 25, 4); // 4 seconds duration
  }, []);

  return (
    <div className="counter-container">
      <div className="counter-box">
        <img src={painting} alt="Painting" className="counter-image" />
        <div className="counter-content">
          <span id="paintingCount">0</span>
          <h2>Paintings</h2>
        </div>
      </div>
      <div className="counter-box">
        <img src={sculptors} alt="Sculptors" className="counter-image" />
        <div className="counter-content">
          <span id="sculptorsCount">0</span>
          <h2>Sculptors</h2>
        </div>
      </div>
      <div className="counter-box">
        <img src={exhibitions} alt="Exhibitions" className="counter-image" />
        <div className="counter-content">
          <span id="exhibitionsCount">0</span>
          <h2>Exhibitions</h2>
        </div>
      </div>
      <div className="counter-box">
        <img src={artists} alt="Artists" className="counter-image" />
        <div className="counter-content">
          <span id="artistsCount">0</span>
          <h2>Artists</h2>
        </div>
      </div>
    </div>
  );
};

export default Counter;
