import React, { useState, useEffect } from 'react';
import './markdown.css';
import { ChevronRight } from 'lucide-react';

export default function TableOfContents({ markdown }) {
    const [openSections, setOpenSections] = useState({});
    const [activeId, setActiveId] = useState(null);

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

    useEffect(() => {
        // Auto-open section when it becomes active
        if (activeId) {
            const currentSection = toc.find(section =>
                section.id === activeId || section.children.some(child => child.id === activeId)
            );

            if (currentSection && currentSection.children.some(child => child.id === activeId)) {
                setOpenSections(prev => ({ ...prev, [currentSection.id]: true }));
            }
        }
    }, [activeId, toc]);

    useEffect(() => {
        // Create a new observer with better options for detecting sections
        const observer = new IntersectionObserver(
            (entries) => {
                // Sort entries by their position in the document to get the topmost visible
                const visibleEntries = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => {
                        const rectA = a.boundingClientRect;
                        const rectB = b.boundingClientRect;
                        return rectA.top - rectB.top;
                    });

                if (visibleEntries.length > 0) {
                    setActiveId(visibleEntries[0].target.id);
                }
            },
            {
                // Adjust these values for better section detection
                rootMargin: '-10% 0px -70% 0px',
                threshold: 0.1,
            }
        );

        // Wait for the DOM to be fully loaded
        setTimeout(() => {
            // Observe all headings
            toc.forEach(({ id, children }) => {
                const h2 = document.getElementById(id);
                if (h2) observer.observe(h2);
                children.forEach((child) => {
                    const h3 = document.getElementById(child.id);
                    if (h3) observer.observe(h3);
                });
            });
        }, 500);

        return () => observer.disconnect();
    }, [markdown]);

    return (
        <nav className="toc-container">
            <h2 className="toc-title">In This Chapter</h2>
            <div style={{ marginTop: '1rem' }}>
                <ul className="toc-list">
                    {toc.map(({ text, id, children }) => (
                        <li key={id} className="toc-item">
                            <div className="toc-header">
                                {children.length > 0 ? (
                                    <ChevronRight
                                        size={20}
                                        className={`toc-toggle ${openSections[id] ? 'rotated' : ''}`}
                                        onClick={() => toggleSection(id)}
                                    />
                                ) : (
                                    <span style={{ width: '1rem', display: 'inline-block' }} />
                                )}
                                <a
                                    href={`#${id}`}
                                    className={`toc-link ${activeId === id ? 'active' : ''}`}
                                >
                                    {text}
                                </a>
                            </div>
                            {openSections[id] && children.length > 0 && (
                                <ul className="toc-sublist">
                                    {children.map((child) => (
                                        <li key={child.id} className="toc-subitem">
                                            <a
                                                href={`#${child.id}`}
                                                className={`toc-sublink ${
                                                    activeId === child.id ? 'active' : ''
                                                }`}
                                            >
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