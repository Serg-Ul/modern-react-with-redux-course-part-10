import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (index) => setExpandedIndex(index);

  return (
    <>
      {items.map(({ id, label, content }, index) => {
        const isExpanded = expandedIndex === index;

        return (
          <div key={id}>
            <h3 onClick={() => handleClick(index)}>{label}</h3>
            { isExpanded && <p>{content}</p> }
          </div>
        )
      })}
    </>
  );
}

export default Accordion;