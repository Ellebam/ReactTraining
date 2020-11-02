import React, { useState } from 'react';
import Accordion from './components/Accordion';
import ColoredLabel from './components/ColoredLabel';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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

const options = [
  {
    label: 'The color Red',
    value: 'red',
  },
  {
    label: 'The color Green',
    value: 'green',
  },
  {
    label: 'A shade of blue',
    value: 'blue',
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>

      <Route path='/dropdown'>
        <Dropdown
          label='select a color'
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
        <ColoredLabel selected={selected} />
      </Route>

      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
};
