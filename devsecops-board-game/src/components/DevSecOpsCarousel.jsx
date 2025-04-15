import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { gameLevels } from '../data/gameLevels';
import '../components/carousel.css';

const DevSecOpsCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // progress bar
  const totalLevels = gameLevels.length;
  const progress = ((activeSlide + 1) / totalLevels) * 100;

  const goToNextSlide = () => {
    setActiveSlide((prev) => (prev === totalLevels - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? totalLevels - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <h1>open-devsecops</h1>
        <p>start your journey of learning devsecops here!</p>
      </div>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="carousel">
        <button
          onClick={goToPrevSlide}
          className="nav-button prev-button"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNextSlide}
          className="nav-button next-button"
        >
          <ChevronRight size={24} />
        </button>
        <div className="carousel-card">
          {gameLevels.map((level, index) => (
            <div
              key={level.id}
              className={`carousel-slide ${index === activeSlide ? 'active' : ''}`}
            >
              {level.isSpecial ? (
                <div className="special-slide">
                  <h2 className="special-title">{level.title}</h2>
                  <p className="special-content">{level.content[0]}</p>
                  {level.id === 'start' && (
                    <div className="challenge-instructions">
                      <h3>Instructions</h3>
                      <p>
                        Select a challenge card and work through each level to learn DevSecOps practices.
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="regular-slide">
                  <h2 className="level-title">{level.title}</h2>
                  <ul className="level-content">
                    {level.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="challenge-area">
                    <p>LINK</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="dot-navigation">
          {gameLevels.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`dot ${index === activeSlide ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevSecOpsCarousel;