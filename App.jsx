import React from 'react';
import Colors from './components/Colors';

const colorArray = [
  { id: 1, name: 'Red' },
  { id: 2, name: 'Green' },
  { id: 3, name: 'Blue' }
];

const App = () => {
  return (
    <div>
      <h1>Color List</h1>
      <Colors colors={colorArray} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));