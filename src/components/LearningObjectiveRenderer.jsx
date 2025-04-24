import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkSlug from 'remark-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './markdown.css';

const LearningObjectiveRenderer = ({ markdownUrl }) => {
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);


    useEffect(() => {
        // Reset content when URL changes
        setContent('');
        setError(null);

        // Check if markdownUrl is valid
        if (!markdownUrl) {
            setError('Invalid markdown URL');
            return;
        }

        console.log(`Fetching content from: ${markdownUrl}`);

        fetch(markdownUrl)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Failed to fetch markdown: ${res.status} ${res.statusText}`);
                }
                return res.text();
            })
            .then((raw) => {
                // Find the base path for relative images
                const basePath = markdownUrl.substring(0, markdownUrl.lastIndexOf('/'));

                // Fix relative image paths
                const fixedContent = raw.replace(
                    /!\[(.*?)\]\(\.\/(.*?)\)/g,
                    (_, alt, path) => `![${alt}](${basePath}/${path})`
                );

                setContent(fixedContent);
            })
            .catch((err) => {
                console.error('Error fetching markdown:', err);
                setError(`Error loading content: ${err.message}`);
            });
    }, [markdownUrl]);

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    if (!content) {
        return <div>Loading content...</div>;
    }

    return (
        <main
            style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '1rem 5rem',
                boxSizing: 'border-box',
            }}
        >
            <div
                className="markdown-body"
                style={{
                    width: '100%',
                    textAlign: 'left',
                    fontFamily: "'Questrial', 'IBM Plex Sans', sans-serif",
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                }}
            >
                <ReactMarkdown
                    children={content}
                    remarkPlugins={[remarkGfm, remarkSlug]}
                    rehypePlugins={[rehypeAutolinkHeadings, rehypeRaw]}
                    components={{
                        img: ({ node, ...props }) => (
                            <img
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'contain',
                                    borderRadius: '8px',
                                    margin: '1rem 0',
                                }}
                                alt={props.alt}
                                {...props}
                            />
                        ),
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || '');
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    style={prism}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                >
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                />
            </div>
        </main>
    );
};

export default LearningObjectiveRenderer;
