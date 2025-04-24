import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MarkdownRenderer from './MarkdownRenderer';
import LearningObjectiveRenderer from './LearningObjectiveRenderer';
import './carousel.css';

const ChapterViewer = ({ chapters, topicTitle, onBack }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [showMarkdown, setShowMarkdown] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    // Progress bar
    const totalChapters = chapters.length;
    const progress = ((activeSlide + 1) / totalChapters) * 100;

    useEffect(() => {
        // Reset to first slide whenever chapters change
        setActiveSlide(0);
        setShowMarkdown(false);
        setIsLoading(false);
    }, [chapters]);

    const goToNextSlide = () => {
        setActiveSlide((prev) => (prev === totalChapters - 1 ? 0 : prev + 1));
        setShowMarkdown(false); // Reset markdown view when changing slides
    };

    const goToPrevSlide = () => {
        setActiveSlide((prev) => (prev === 0 ? totalChapters - 1 : prev - 1));
        setShowMarkdown(false); // Reset markdown view when changing slides
    };

    const goToSlide = (index) => {
        setActiveSlide(index);
        setShowMarkdown(false); // Reset markdown view when selecting a specific slide
    };

    const toggleMarkdown = () => {
        setShowMarkdown(!showMarkdown);
    };

    return (
        <div className="carousel-container">
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                marginBottom: '1.5rem',
                position: 'relative',
            }}>
                <button
                    onClick={onBack}
                    className="dashboard-button"
                >
                    DASHBOARD
                </button>

                <h1 style={{
                    textAlign: 'center',
                    fontFamily: "'Questrial', sans-serif",
                    fontWeight: '800',
                    fontSize: '2.4rem',
                    margin: 0
                }}>
                    {topicTitle}
                </h1>
            </div>

            <div className="progress-bar-container">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <div className="carousel">
                {!showMarkdown && (
                    <>
                        <button
                            onClick={goToPrevSlide}
                            className="nav-button prev-button"
                        >
                            <ChevronLeft size={30} />
                        </button>
                        <button
                            onClick={goToNextSlide}
                            className="nav-button next-button"
                        >
                            <ChevronRight size={30} />
                        </button>
                    </>
                )}

                {showMarkdown ? (
                    <div className="markdown-container">
                        <div className="markdown-header">
                            <button onClick={toggleMarkdown} className="close-button">
                                CLOSE
                            </button>
                        </div>
                        <MarkdownRenderer markdownUrl={chapters[activeSlide].markdownUrl} />
                    </div>
                ) : (
                    <div className="carousel-card">
                        <div className="chapter-slide active">
                            <div className="learning-objectives">
                                <div className="learning-objectives-content">
                                    <LearningObjectiveRenderer markdownUrl={chapters[activeSlide].overviewUrl} />
                                </div>
                            </div>
                            <button onClick={toggleMarkdown} className="start-button">
                                Start
                            </button>
                        </div>
                    </div>
                )}

                {!showMarkdown && (
                    <div className="dot-navigation">
                        {chapters.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`dot ${index === activeSlide ? 'active' : ''}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChapterViewer;