import React, {useState} from 'react';
import ChapterViewer from './components/ChapterViewer';
import TopicSelection from './components/TopicSelection';
import './components/carousel.css';

function App() {
    const [currentView, setCurrentView] = useState('home');

    const topic = [
        {
            id: 'topic-1',
            title: 'Topic 1 - Foundations'
        },
        {
            id: 'topic-2',
            title: 'Topic 2 - DevOps and DevSecOps'
        },
        {
            id: 'topic-3',
            title: 'Topic 3 - DataOps'
        }
    ];


    const topic1Chapters = [
        {
            id: 'chapter-1',
            title: 'Chapter 1 DevOps',
            overviewUrl: '/docs/topic-1-foundations/chapter-1-containerization/overview.md',
            markdownUrl: '/docs/topic-1-foundations/chapter-1-containerization/index.md'
        },
        {
            id: 'chapter-2',
            title: 'Chapter 2 DevOps',
            overviewUrl: '/docs/topic-1-foundations/chapter-2-version-control/overview.md',
            markdownUrl: '/docs/topic-1-foundations/chapter-2-version-control/index.md'
        }
    ];


    const topic2Chapters = [
        {
            id: 'chapter-1',
            title: 'Chapter 1 DevOps',
            overviewUrl: '/docs/topic-1-foundations/chapter-1-containerization/overview.md',
            markdownUrl: '/docs/topic-1-foundations/chapter-1-containerization/index.md'
        },
        {
            id: 'chapter-2',
            title: 'Chapter 2 DevOps',
            overviewUrl: '/docs/topic-1-foundations/chapter-2-version-control/overview.md',
            markdownUrl: '/docs/topic-1-foundations/chapter-2-version-control/index.md'
        }
    ];

    const topic3Chapters = [
        {
            id: 'chapter-1',
            title: 'Chapter 1 DevOps',
            overviewUrl: '/docs/topic-1-foundations/chapter-1-containerization/overview.md',
            markdownUrl: '/docs/topic-1-foundations/chapter-1-containerization/index.md'
        },
        {
            id: 'chapter-2',
            title: 'Chapter 2 DevOps',
            overviewUrl: '/docs/topic-1-foundations/chapter-2-version-control/overview.md',
            markdownUrl: '/docs/topic-1-foundations/chapter-2-version-control/index.md'
        }
    ];

    const viewSelection = (view) => {
        setCurrentView(view);
    }


    return (
        <div className="app-container">
            <div>
                {currentView === 'home' && (<TopicSelection onSelectTopic={viewSelection}/>)}
            </div>
            <div>
                {currentView === 'topic-1' && (
                    <ChapterViewer
                        chapters={topic1Chapters}
                        topicTitle={topic[0].title}
                        onBack={() => setCurrentView('home')
                        }/>)
                }
            </div>
            <div>
                {currentView === 'topic-2' && (
                    <ChapterViewer
                        chapters={topic2Chapters}
                        topicTitle={topic[1].title}
                        onBack={() => setCurrentView('home')
                        }/>)
                }
            </div>
            <div>
                {currentView === 'topic-3' && (
                    <ChapterViewer
                        chapters={topic3Chapters}
                        topicTitle={topic[2].title}
                        onBack={() => setCurrentView('home')
                        }/>)
                }
            </div>
        </div>
    );
}

export default App;