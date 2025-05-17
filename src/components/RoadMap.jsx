import {useState} from "react";
import bgImg from '/public/img/boardgame.png';
import './RoadMap.css';


export const boardData = [
    {
        id: 1,
        view: 'topic-1',
        slide: 0,

    },
    {
        id: 2,
        view: 'topic-1',
        slide: 1,
    },
    {
        id: 3,
        view: 'topic-1',
        slide: 2,
    },
    {
        id: 4,
        view: 'topic-1',
        slide: 3,
    },
    {
        id: 5,
        view: 'topic-1',
        slide: 4,
    },
    {
        id: 6,
        view: 'topic-1',
        slide: 5,

    },
    {
        id: 7,
        view: 'topic-2',
        slide: 0,
    },
    {
        id: 8,
        view: 'topic-2',
        slide: 1,
    },
    {
        id: 9,
        view: 'topic-2',
        slide: 2,
    },
    {
        id: 10,
        view: 'topic-2',
        slide: 3,
    },
    {
        id: 11,
        view: 'topic-2',
        slide: 4,
    },
    {
        id: 12,
        view: 'topic-2',
        slide: 5,
    },
    {
        id: 13,
        view: 'topic-2',
        slide: 6,
    },
    {
        id: 14,
        view: 'topic-2',
        slide: 7,
    },
    {
        id: 15,
        view: 'topic-3',
        slide: 0,
    },
    {
        id: 16,
        view: 'topic-3',
        slide: 1,
    },
    {
        id: 17,
        view: 'topic-3',
        slide: 2,
    },
    {
        id: 18,
        view: 'topic-3',
        slide: 3,
    }
];



function RoadMap({setCurrentView,setActiveSlide}) {
    const handleBoxClick = (box) => {
        setCurrentView(box.view)
        setActiveSlide(box.slide)
    };

    return (
        <div className="app">
            <div className="board-container">
                <img src={bgImg} alt="Board Background" className="background-img"/>
                {boardData.map((box, index) => (
                    <div
                        key={box.id}
                        className={`board-box position-${index + 1}`}
                        onClick={() => handleBoxClick(box)}
                    >

                        {/*<div className="level">{box.id}</div>*/}
                    </div>
                ))}
            </div>
            {/*<div className="current-view">Current View: {currentView}</div>*/}

        </div>
    );

}

export default RoadMap;