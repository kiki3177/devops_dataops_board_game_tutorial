import React, {useState, useEffect} from 'react';
import ChapterViewer from './components/ChapterViewer';
import TopicSelection from './components/TopicSelection';
import Home from './components/Home'; // Import the Home component
import './components/carousel.css';

function App() {
    const [currentView, setCurrentView] = useState('landing');
    const [initialLoad, setInitialLoad] = useState(true);

    const topic = [
        {
            id: 'topic-1',
            title: 'Topic 1 - Foundations'
        },
        {
            id: 'topic-2',
            title: 'Topic 2 - Infrastructure'
        },
        {
            id: 'topic-3',
            title: 'Topic 3 - DevOps and DevSecOps'
        },
        {
            id: 'topic-4',
            title: 'Topic 4 - DataOps'
        }
    ];

    const topic1Chapters = [
        {
            id: 'chapter-1',
            title: 'Chapter 1 Version Control',
            overviewUrl: '/docs/topic-1-foundations/chapter-1-version-control/overview.md',
            markdownUrl: '/docs/topic-1-foundations/chapter-1-version-control/index.md'
        },
        {
            id: 'chapter-2',
            title: 'Chapter 2 Lab 1 - Git Practice',
            overviewUrl: '/docs/topic-1-foundations/chapter-2-lab-1-git-practice/overview.md',
            markdownUrl: '/docs/topic-1-foundations/chapter-2-lab-1-git-practice/index.md'
        },
        {
            id: 'chapter-3',
            title: 'Chapter 3 Containerization',
            overviewUrl: '/docs/topic-1-foundations/chapter-3-containerization/overview.md',
            markdownUrl: '/docs/topic-1-foundations/chapter-3-containerization/index.md'
        },
        {
            id: 'chapter-4',
            title: 'Chapter 4 CI/CD with Jenkins',
            overviewUrl: '/docs/topic-1-foundations/chapter-4-cicd-jenkins/overview.md',
            markdownUrl: '/docs/topic-1-foundations/chapter-4-cicd-jenkins/index.md'
        },
        {
            id: 'chapter-5',
            title: 'Chapter 5 Azure Overview',
            overviewUrl: '/docs/topic-1-foundations/chapter-5-azure-overview/overview.md',
            markdownUrl: '/docs/topic-1-foundations/chapter-5-azure-overview/index.md'
        },
        {
            id: 'chapter-6',
            title: 'Chapter 6 Quiz',
            overviewUrl: '/docs/topic-1-foundations/chapter-6-quiz/overview.md',
            markdownUrl: '/docs/topic-1-foundations/chapter-6-quiz/index.md'
        }
    ];

    const topic2Chapters = [
        {
            id: 'chapter-1',
            title: 'Chapter 1 Admin Lab 1 - Infra for DevOps/DevSecOps',
            overviewUrl: '/docs/topic-2-infrastructure/chapter-1-admin-lab-1-infra-for-devopsdevsecops/overview.md',
            markdownUrl: '/docs/topic-2-infrastructure/chapter-1-admin-lab-1-infra-for-devopsdevsecops/index.md'
        },
        {
            id: 'chapter-2',
            title: 'Chapter 2 Admin Lab 2 - Infra for DataOps',
            overviewUrl: '/docs/topic-2-infrastructure/chapter-2-admin-lab-2-infra-for-dataops/overview.md',
            markdownUrl: '/docs/topic-2-infrastructure/chapter-2-admin-lab-2-infra-for-dataops/index.md'
        }
    ];


    const topic3Chapters = [
        {
            id: 'chapter-1',
            title: 'Chapter 1 DevOps Foundation',
            overviewUrl: '/docs/topic-3-devopsdevsecops/chapter-1-devops-foundation/overview.md',
            markdownUrl: '/docs/topic-3-devopsdevsecops/chapter-1-devops-foundation/index.md'
        },
        {
            id: 'chapter-2',
            title: 'Chapter 2 DevSecOps Foundation',
            overviewUrl: '/docs/topic-3-devopsdevsecops/chapter-2-devsecops-foundation/overview.md',
            markdownUrl: '/docs/topic-3-devopsdevsecops/chapter-2-devsecops-foundation/index.md'
        },
        {
            id: 'chapter-3',
            title: 'Chapter 3 CI/CD In DevOps and DevSecOps',
            overviewUrl: '/docs/topic-3-devopsdevsecops/chapter-3-cicd-in-devopsdevsecops/overview.md',
            markdownUrl: '/docs/topic-3-devopsdevsecops/chapter-3-cicd-in-devopsdevsecops/index.md'
        },
        {
            id: 'chapter-4',
            title: 'Chapter 4 Webhooks',
            overviewUrl: '/docs/topic-3-devopsdevsecops/chapter-4-webhooks/overview.md',
            markdownUrl: '/docs/topic-3-devopsdevsecops/chapter-4-webhooks/index.md'
        },
        {
            id: 'chapter-5',
            title: 'Chapter 5 Lab 2 - React and Node.js Project Deployment',
            overviewUrl: '/docs/topic-3-devopsdevsecops/chapter-5-lab-2-react-nodejs-deployment/overview.md',
            markdownUrl: '/docs/topic-3-devopsdevsecops/chapter-5-lab-2-react-nodejs-deployment/index.md'
        },
        {
            id: 'chapter-6',
            title: 'Chapter 6 Lab 3 - Secure a Vulnerable Application',
            overviewUrl: '/docs/topic-3-devopsdevsecops/chapter-6-lab-3-secure-vulnerable-application/overview.md',
            markdownUrl: '/docs/topic-3-devopsdevsecops/chapter-6-lab-3-secure-vulnerable-application/index.md'
        }
    ];

    const topic4Chapters = [
        {
            id: 'chapter-1',
            title: 'Chapter 1 DataOps Prerequisite',
            overviewUrl: '/docs/topic-4-dataops/chapter-1-dataops-prerequisite/overview.md',
            markdownUrl: '/docs/topic-4-dataops/chapter-1-dataops-prerequisite/index.md'
        },
        {
            id: 'chapter-2',
            title: 'Chapter 2 DataOps Foundation',
            overviewUrl: '/docs/topic-4-dataops/chapter-2-dataops-foundation/overview.md',
            markdownUrl: '/docs/topic-4-dataops/chapter-2-dataops-foundation/index.md'
        },
        {
            id: 'chapter-3',
            title: 'Chapter 3 CI/CD In DataOps',
            overviewUrl: '/docs/topic-4-dataops/chapter-3-cicd-in-dataops/overview.md',
            markdownUrl: '/docs/topic-4-dataops/chapter-3-cicd-in-dataops/index.md'
        }
    ];

    const viewSelection = (view) => {
        setCurrentView(view);
    }

    useEffect(() => {
        if (initialLoad && currentView !== 'landing' && currentView !== 'home') {
            setInitialLoad(false);
        }
    }, [initialLoad, currentView]);

    return (
        <div className="app-container">
            {currentView === 'landing' && (
                <Home onNavigateToOverview={() => setCurrentView('home')} />
            )}

            {currentView === 'home' && (
                <div>
                    <button
                        onClick={() => setCurrentView('landing')}
                        className="dashboard-button"
                        style={{
                            marginTop: '3.5rem',
                            marginLeft: '20.2rem',
                            zIndex: '100'
                        }}
                    >
                        Home
                    </button>
                    <TopicSelection onSelectTopic={viewSelection}/>
                </div>
            )}

            {currentView === 'topic-1' && (
                <ChapterViewer
                    key={initialLoad ? 'reset-topic-1' : 'topic-1'}
                    chapters={topic1Chapters}
                    topicTitle={topic[0].title}
                    onBack={() => setCurrentView('home')}
                />
            )}

            {currentView === 'topic-2' && (
                <ChapterViewer
                    key={initialLoad ? 'reset-topic-2' : 'topic-2'}
                    chapters={topic2Chapters}
                    topicTitle={topic[1].title}
                    onBack={() => setCurrentView('home')}
                />
            )}

            {currentView === 'topic-3' && (
                <ChapterViewer
                    key={initialLoad ? 'reset-topic-3' : 'topic-3'}
                    chapters={topic3Chapters}
                    topicTitle={topic[2].title}
                    onBack={() => setCurrentView('home')}
                />
            )}

            {currentView === 'topic-4' && (
                <ChapterViewer
                    key={initialLoad ? 'reset-topic-4' : 'topic-4'}
                    chapters={topic4Chapters}
                    topicTitle={topic[2].title}
                    onBack={() => setCurrentView('home')}
                />
            )}
        </div>
    );
}

export default App;