import React, {useState, useEffect, act} from 'react';
import ChapterViewer from './components/ChapterViewer';
import TopicSelection from './components/TopicSelection';
import Home from './components/Home'; // Import the Home component
import './components/carousel.css';
import RoadMap from "./components/RoadMap.jsx";

function App() {
    const [currentView, setCurrentView] = useState('landing');
    const [activeSlide, setActiveSlide] = useState(0);


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
            title: 'Chapter 1 DevOps Foundation',
            overviewUrl: '/docs/topic-2-devopsdevsecops/chapter-1-devops-foundation/overview.md',
            markdownUrl: '/docs/topic-2-devopsdevsecops/chapter-1-devops-foundation/index.md'
        },
        {
            id: 'chapter-2',
            title: 'Chapter 2 DevSecOps Foundation',
            overviewUrl: '/docs/topic-2-devopsdevsecops/chapter-2-devsecops-foundation/overview.md',
            markdownUrl: '/docs/topic-2-devopsdevsecops/chapter-2-devsecops-foundation/index.md'
        },
        {
            id: 'chapter-3',
            title: 'Chapter 3 Webhooks',
            overviewUrl: '/docs/topic-2-devopsdevsecops/chapter-3-webhooks/overview.md',
            markdownUrl: '/docs/topic-2-devopsdevsecops/chapter-3-webhooks/index.md'
        },
        {
            id: 'chapter-4',
            title: 'Chapter 4 CI/CD In DevOps and DevSecOps',
            overviewUrl: '/docs/topic-2-devopsdevsecops/chapter-4-cicd-in-devopsdevsecops/overview.md',
            markdownUrl: '/docs/topic-2-devopsdevsecops/chapter-4-cicd-in-devopsdevsecops/index.md'
        },
        {
            id: 'chapter-5',
            title: 'Chapter 5 Infra Lab - DevOps/DevSecOps (Admin)',
            overviewUrl: '/docs/topic-2-devopsdevsecops/chapter-5-admin-lab-infra-for-devopsdevsecops/overview.md',
            markdownUrl: '/docs/topic-2-devopsdevsecops/chapter-5-admin-lab-infra-for-devopsdevsecops/index.md'
        },
        {
            id: 'chapter-6',
            title: 'Chapter 6 Lab 2 - React and Node.js Project Deployment',
            overviewUrl: '/docs/topic-2-devopsdevsecops/chapter-6-lab-2-react-nodejs-deployment/overview.md',
            markdownUrl: '/docs/topic-2-devopsdevsecops/chapter-6-lab-2-react-nodejs-deployment/index.md'
        },
        {
            id: 'chapter-7',
            title: 'Chapter 7 Lab 3 - Secure a Vulnerable Application',
            overviewUrl: '/docs/topic-2-devopsdevsecops/chapter-7-lab-3-secure-vulnerable-application/overview.md',
            markdownUrl: '/docs/topic-2-devopsdevsecops/chapter-7-lab-3-secure-vulnerable-application/index.md'
        },
        {
            id: 'chapter-8',
            title: 'Chapter 8 Optional Lab 2 - React and Node.js Project Deployment (using MongoDB)',
            overviewUrl: '/docs/topic-2-devopsdevsecops/chapter-8-lab-2-optional-react-nodejs-deployment/overview.md',
            markdownUrl: '/docs/topic-2-devopsdevsecops/chapter-8-lab-2-optional-react-nodejs-deployment/index.md'
        }
    ];

    const topic3Chapters = [
        {
            id: 'chapter-1',
            title: 'Chapter 1 DataOps Foundation',
            overviewUrl: '/docs/topic-3-dataops/chapter-1-dataops-foundation/overview.md',
            markdownUrl: '/docs/topic-3-dataops/chapter-1-dataops-foundation/index.md'
        },
        {
            id: 'chapter-2',
            title: 'Chapter 2 CI/CD In DataOps',
            overviewUrl: '/docs/topic-3-dataops/chapter-2-cicd-in-dataops/overview.md',
            markdownUrl: '/docs/topic-3-dataops/chapter-2-cicd-in-dataops/index.md'
        },
        {
            id: 'chapter-3',
            title: 'Chapter 3 ELT Pipeline Walkthrough',
            overviewUrl: '/docs/topic-3-dataops/chapter-3-elt-pipeline-walkthrough/overview.md',
            markdownUrl: '/docs/topic-3-dataops/chapter-3-elt-pipeline-walkthrough/index.md'
        },
        {
            id: 'chapter-4',
            title: 'Chapter 4 IaC and DataOps Pipeline',
            overviewUrl: '/docs/topic-3-dataops/chapter-4-lab-IaC-dataops-pipeline/overview.md',
            markdownUrl: '/docs/topic-3-dataops/chapter-4-lab-IaC-dataops-pipeline/index.md'
        }
    ];

    return (
        <div className="app-container">



            {currentView === 'landing' && (
                <Home onNavigateToOverview={() => setCurrentView('home')} />
            )}

            {currentView === 'home' && (
                <TopicSelection setCurrentView = {setCurrentView} setActiveSlide = {setActiveSlide} onSelectTopic = {setCurrentView}/>
            )}

            {currentView === 'topic-1' && (
                <ChapterViewer
                    // key={initialLoad ? 'reset-topic-1' : 'topic-1'}
                    chapters={topic1Chapters}
                    topicTitle={topic[0].title}
                    onBack={() => setCurrentView('home')}
                    activeSlide={activeSlide}
                    setActiveSlide={setActiveSlide}
                />
            )}

            {currentView === 'topic-2' && (
                <ChapterViewer
                    // key={initialLoad ? 'reset-topic-2' : 'topic-2'}
                    chapters={topic2Chapters}
                    topicTitle={topic[1].title}
                    onBack={() => setCurrentView('home')}
                    activeSlide={activeSlide}
                    setActiveSlide={setActiveSlide}
                />
            )}

            {currentView === 'topic-3' && (
                <ChapterViewer
                    // key={initialLoad ? 'reset-topic-3' : 'topic-3'}
                    chapters={topic3Chapters}
                    topicTitle={topic[2].title}
                    onBack={() => setCurrentView('home')}
                    activeSlide={activeSlide}
                    setActiveSlide={setActiveSlide}
                />
            )}


        </div>
    );
}

export default App;