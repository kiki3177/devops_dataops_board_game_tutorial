import React from 'react';
import boeingLogo from '/public/boeinglogo.png';
import uwLogo from '/public/uwlogo.png';
import wicLogo from '/public/wiclogo.png';
import banner from '/public/banner.png';

const Home = ({ onNavigateToOverview }) => {
    return (
        <div style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem',
            fontFamily: "'Questrial', sans-serif",
            overflow: 'hidden',
            backgroundColor: '#f5f5f5'
        }}>


            {/* LOGOS */}
            <img
                src={wicLogo}
                alt="WIC Logo"
                style={{
                    position: 'absolute',
                    top: '2rem',
                    right: '8rem',
                    width: '150px',
                    height: 'auto',
                }}
            />
            <img
                src={boeingLogo}
                alt="Boeing Logo"
                style={{
                    position: 'absolute',
                    top: '2.4rem',
                    right: '0rem',
                    width: '150px',
                    height: 'auto',
                }}
            />

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


            <img
                src={banner}
                alt="DevSecOps Lab In A Box Banner"
                style={{
                    width: '80%',
                    maxWidth: '600px',
                    height: 'auto'
                }}
            />

            <div>
                <button
                    onClick={onNavigateToOverview}
                    style={{
                        padding: '1rem 2rem',
                        fontSize: '1.25rem',
                        fontWeight: '800',
                        color: 'white',
                        backgroundColor: '#4B2E83',
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '6px 6px 0px #000',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease',
                        marginTop: '2rem'
                    }}
                    onMouseOver={e => e.currentTarget.style.transform = 'translate(-2px, -2px)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'translate(0, 0)'}
                >
                    COURSE OVERVIEW
                </button>
            </div>

            <h1 style={{
                backgroundColor: 'black',
                color: '#f5f5f5',
                padding: '1rem 3rem',
                fontSize: '2rem',
                fontWeight: '1000',
                borderRadius: '12px',
                marginTop: '3rem'
            }}>
                INTRODUCTION
            </h1>

        </div>
    );
};

export default Home;