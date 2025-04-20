// src/App.jsx
import React from 'react';
import MarkdownRenderer from './components/MarkdownRenderer';

function App() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-4"></h1>
            <MarkdownRenderer markdownUrl="/docs/topic-1-foundations/chapter-1-containerization/index.md" />
        </div>
    );
}

export default App;
