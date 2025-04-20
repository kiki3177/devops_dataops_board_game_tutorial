// src/components/TableOfContents.jsx
import React, { useState } from 'react';
import './markdown.css'; // Ensure this includes .toc-container styles
import { ChevronRight } from 'lucide-react';

export default function TableOfContents({ markdown }) {
    const [openSections, setOpenSections] = useState({});

    const lines = markdown.split('\n');
    const toc = [];
    let currentH2 = null;

    for (const line of lines) {
        if (line.startsWith('## ') && !line.startsWith('###')) {
            const text = line.slice(3).trim();
            const id = slugify(text);
            currentH2 = { text, id, children: [] };
            toc.push(currentH2);
        } else if (line.startsWith('### ') && currentH2) {
            const text = line.slice(4).trim();
            const id = slugify(text);
            currentH2.children.push({ text, id });
        }
    }

    function slugify(text) {
        return text
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '');
    }

    const toggleSection = (id) => {
        setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <nav className="toc-container">
            <h2 className="toc-title">In This Chapter</h2>
            <div style={{marginTop: '1rem'}}>
                <ul className="toc-list">
                    {toc.map(({text, id, children}) => (
                        <li key={id} className="toc-item">
                            <div className="toc-header">
                                {children.length > 0 ? (
                                    <ChevronRight
                                        size={20}
                                        style={{
                                            transform: openSections[id] ? 'rotate(90deg)' : 'rotate(0deg)',
                                            transition: 'transform 0.2s ease',
                                            color: '#666',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => toggleSection(id)}
                                    />
                                ) : (
                                    <span style={{width: '1rem', display: 'inline-block'}}/>
                                )}
                                <a href={`#${id}`} className="toc-link">
                                    {text}
                                </a>
                            </div>
                            {openSections[id] && children.length > 0 && (
                                <ul className="toc-sublist">
                                    {children.map((child) => (
                                        <li key={child.id} className="toc-subitem">
                                            <a href={`#${child.id}`} className="toc-sublink">
                                                {child.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
