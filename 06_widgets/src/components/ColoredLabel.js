import React from 'react';
import './ColoredLabel.css';

const ColoredLabel = ({ selected }) => {
  return (
    <div className='ui container segment raised'>
      <p className={`special-thing ${selected.value}`}>
        {' '}
        This text changes color
      </p>
    </div>
  );
};

export default ColoredLabel;
