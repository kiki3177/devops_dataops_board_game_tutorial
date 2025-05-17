import React from 'react';
import uwLogo from '/public/img/uwlogo.png';
import wicLogo from '/public/img/wiclogo.png';
import banner from '/public/img/banner.png';
import RoadMap from "./RoadMap.jsx";

const TopicSelection = ({setCurrentView, setActiveSlide, onSelectTopic}) => {
    const buttons = [
        {label: 'FOUNDATIONS', color: '#2F855A', viewName: 'topic-1'},
        {label: 'DEVOPS & DEVSECOPS', color: '#2B6CB0', viewName: 'topic-2'},
        {label: 'DATAOPS', color: '#4B2E83', viewName: 'topic-3'}
    ];

    return (
        <div style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem',
            fontFamily: "'Questrial', sans-serif",
            overflow: 'hidden'
        }}>


            <button
                onClick={() => setCurrentView('landing')}
                className="dashboard-button"
                style={{
                    marginTop: '1.8rem',
                    marginLeft: '6rem',
                    zIndex: '100'
                }}
            >
                Home
            </button>


            <img
                src={banner}
                alt="Banner"
                style={{
                    width: '100%',
                    maxWidth: '600px',
                    height: 'auto',
                    marginBottom: '3rem',
                    marginTop: '0.4rem',
                }}
            />


            <img
                src={wicLogo}
                alt="WIC Logo"
                style={{
                    position: 'absolute',
                    top: '1.8rem',
                    right: '3rem',
                    width: '150px',
                    height: 'auto',
                }}
            />


            <div style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                marginTop: '2rem'
            }}>
                <div style={{
                    backgroundColor: 'black',
                    color: 'white',
                    fontWeight: '700',
                    fontSize: '1.25rem',
                    padding: '0.75rem 2rem',
                    borderRadius: '12px',
                    maxWidth: '800px',
                    width: '100%',
                    textAlign: 'center',
                    fontFamily: "'Questrial', sans-serif",
                    letterSpacing: '0.5px',
                    boxSizing: 'border-box',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                    marginBottom: '2.5rem',
                    textShadow: '0.5px 0.5px 0',
                }}>
                    COURSE OVERVIEW
                </div>
            </div>


            {/* Buttons */}
            <div style={{display: 'flex', gap: '2rem'}}>
                {buttons.map(({label, color, viewName}) => (
                    <button
                        key={label}
                        onClick={() => onSelectTopic(viewName)}
                        style={{
                            padding: '1rem 2.5rem',
                            fontSize: '1.25rem',
                            fontWeight: '1000',
                            color,
                            border: `2px solid ${color}`,
                            borderRadius: '16px',
                            background: 'white',
                            boxShadow: '6px 6px 0px #000',
                            cursor: 'pointer',
                            transition: 'transform 0.2s ease',
                            textShadow: '0.5px 0.5px 0',
                        }}
                        onMouseOver={e => e.currentTarget.style.transform = 'translate(-2px, -2px)'}
                        onMouseOut={e => e.currentTarget.style.transform = 'translate(0, 0)'}
                    >
                        {label}
                    </button>
                ))}
            </div>

            <div style={{
                marginTop: '4rem',
                width: '80%',
                maxWidth: '1000px',
                aspectRatio: '2000 / 1545',
                marginBottom: '10rem',
            }}>
                <RoadMap setCurrentView={setCurrentView} setActiveSlide={setActiveSlide}/>
            </div>


            <div style={{
                position: 'absolute',
                bottom: '7rem',
                right: '8rem',
                fontSize: '1rem',
                fontWeight: 'bolder',
                color: '#4B2E83',
                fontFamily: "'Questrial', sans-serif",
            }}>
                DESIGNED BY
            </div>

            <img
                src={uwLogo}
                alt="UW Logo"
                style={{
                    position: 'absolute',
                    bottom: '5rem',
                    right: '2rem',
                    width: '200px',
                    height: 'auto',
                }}
            />


        </div>
    );
};

export default TopicSelection;
