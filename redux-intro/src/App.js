import React from 'react';
import Counter from './components/Counter';
import IncreaseCounter from './components/IncreaseCounter';
import DecreaseCounter from './components/DecreaseCounter';
import IncreaseByTwoCounter from './components/IncreaseByTwoCounter';

function App() {
  return (
    <div >
      <Counter />
      <IncreaseCounter />
      <IncreaseByTwoCounter />
      <DecreaseCounter />

    </div>
  );
}

export default App;
