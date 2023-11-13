import React, { useState } from 'react';
import './InfoPage.css';

const Info = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleCollapse = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="diamond-info">
      <h1 className='diamond-info-title'>Diamond Information</h1>
      <div className="collapsible-container">
        {infoData.map((info, index) => (
          <div
            key={index}
            className={`collapsible ${index === activeIndex ? 'active' : ''}`}
            onClick={() => toggleCollapse(index)}
          >
            <h6 className="card-title">{info.title}</h6>
            {index === activeIndex && <p className="card-text">{info.content}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

const infoData = [
  {
    title: 'What is shape?',
    content: 'Shape: refers to the outline and physical attributes.',
  },
  {
    title:'What is cut?',
    content:'Cut: refers to the polish, proportions, and symmetry of a diamond, and not in reference to the shape of the diamond.'
  },
  {
    title:'What is clarity?',
    content:'Clarity: a measure of the purity and rarity of the stone, graded by the visibility of these characteristics under 10-power magnification.'
  },
  {
    title:'What is color?',
    content:`Color: refers to the lack of color in a diamond with the color D meaning it's colorless.`
  },
  {
    title:'What is carat?',
    content:'Carat: the unit of measurement for the physical weight of a diamond.'
  },
  {
    title:'What does reported mean?',
    content:'Reported: a document or a "diamond certificate"/diamond dossier issued by an independent Gemological Laboratory who authenticates diamonds.'
  }
];

export default Info;
