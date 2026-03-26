import React, { useState } from 'react';
import './AccordionRow.css';

interface AccordionRowProps {
  titleContent: React.ReactNode;
  expandedContent: React.ReactNode;
}

export const AccordionRow: React.FC<AccordionRowProps> = ({ titleContent, expandedContent }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`accordion-row ${isExpanded ? 'expanded' : ''}`}>
      <div className="accordion-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="accordion-title-area">{titleContent}</div>
        <div className="accordion-icon">
          {isExpanded ? '▲' : '▼'}
        </div>
      </div>
      {isExpanded && (
        <div className="accordion-body">
          {expandedContent}
        </div>
      )}
    </div>
  );
};
