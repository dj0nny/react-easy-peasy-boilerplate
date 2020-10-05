import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useStoreState, useStoreActions } from 'easy-peasy';

const App = () => {
  const counter = useStoreState((state) => state.counter.count);
  const { plusOne, minusOne } = useStoreActions((actions) => actions.counter);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {counter}
        <div className="controls">
          <button onClick={plusOne}>Add One</button>
          <button onClick={minusOne}>Remove One</button>
        </div>
      </header>
    </div>
  );
}

export default App;
