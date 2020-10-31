import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is react?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is just the dopest shit ever',
  },

  {
    title: 'How do you use React?',
    content: 'Just google it lol',
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
