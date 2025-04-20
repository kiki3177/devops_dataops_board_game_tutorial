import React from 'react';

const TopicSelection = ({ onSelectTopic }) => {
    const buttons = [
        { label: 'FOUNDATIONS', color: '#2F855A', viewName: 'topic-1' },
        { label: 'DEVOPS & DEVSECOPS', color: '#2B6CB0', viewName: 'topic-2'},
        { label: 'DATAOPS', color: '#4B2E83', viewName: 'topic-3' }
    ];

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem',
            fontFamily: "'Questrial', sans-serif"
        }}>
            <h1 style={{
                backgroundColor: 'black',
                color: 'white',
                padding: '1rem 3rem',
                fontSize: '2rem',
                fontWeight: '1000',
                borderRadius: '12px',
                marginBottom: '3rem'
            }}>
                START YOUR JOURNEY
            </h1>

            <div style={{ display: 'flex', gap: '2rem' }}>
                {buttons.map(({ label, color, viewName }) => (
                    <button
                        key={label}
                        onClick={() => onSelectTopic(viewName)}
                        style={{
                            padding: '1rem 2.5rem',
                            fontSize: '1.25rem',
                            fontWeight: '800',
                            color,
                            border: `2px solid ${color}`,
                            borderRadius: '16px',
                            background: 'white',
                            boxShadow: '6px 6px 0px #000',
                            cursor: 'pointer',
                            transition: 'transform 0.2s ease',
                        }}
                        onMouseOver={e => e.currentTarget.style.transform = 'translate(-2px, -2px)'}
                        onMouseOut={e => e.currentTarget.style.transform = 'translate(0, 0)'}
                    >
                        {label}
                    </button>
            ))}
            </div>
        </div>
    );
};

export default TopicSelection;
