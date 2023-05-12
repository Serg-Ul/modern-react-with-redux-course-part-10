import React from 'react';
import Accordion from "./components/Accordion";

const items = [
  {
    id: 1,
    label: 'Label 1',
    content: 'Content 1',
  },
  {
    id: 2,
    label: 'Label 2',
    content: 'Content 2',
  },
  {
    id: 3,
    label: 'Label 3',
    content: 'Content 3',
  },
];

const App = (props) => {
  return (
    <Accordion items={items} />
  );
}

export default App;