// src/components/MarkdownRenderer.jsx
import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkSlug from 'remark-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeRaw from 'rehype-raw';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {prism} from 'react-syntax-highlighter/dist/esm/styles/prism';
import TableOfContents from './TableOfContents';
import './markdown.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const MarkdownRenderer = ({markdownUrl}) => {
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
        <div
            style={{
                display: 'flex',
                width: '100%',
                margin: 0,
                padding: 0,
                boxSizing: 'border-box',
                alignItems: 'flex-start',
            }}
        >

            <div className={"container-fluid"}>
                <div className="row">
                    <div className="col-md-4">
                        <div className="toc-container sticky-top p-3">
                            {/* Sidebar */}
                            <aside>
                                <div style={{marginTop: '3rem'}}>
                                    <TableOfContents markdown={content}/>
                                </div>
                            </aside>
                        </div>

                    </div>

                    {/* Main content */}
                    <div className="col-md-8">
                        <main
                            style={{
                                marginTop: '3rem',
                                marginRight: '2rem',
                            }}
                        >
                            <div className="markdown-body">
                                <ReactMarkdown
                                    children={content}
                                    remarkPlugins={[remarkGfm, remarkSlug]}
                                    rehypePlugins={[rehypeAutolinkHeadings, rehypeRaw]}
                                    components={{
                                        // Image styling
                                        img: ({node, ...props}) => (
                                            <img
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                    objectFit: 'contain',
                                                    borderRadius: '8px',
                                                }}
                                                alt={props.alt}
                                                {...props}
                                            />
                                        ),

                                        // Syntax highlighting
                                        code({node, inline, className, children, ...props}) {
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarkdownRenderer;