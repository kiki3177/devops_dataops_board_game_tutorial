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

    useEffect(() => {
        fetch(markdownUrl)
            .then((res) => res.text())
            .then((raw) => {
                const basePath = markdownUrl.substring(0, markdownUrl.lastIndexOf('/'));
                const fixedContent = raw.replace(
                    /!\[(.*?)\]\(\.\/(.*?)\)/g,
                    (_, alt, path) => `![${alt}](${basePath}/${path})`
                );
                setContent(fixedContent);
            });
    }, [markdownUrl]);

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
