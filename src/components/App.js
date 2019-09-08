import React from 'react';

import CountdownInput from './CountdownInput';
import CountdownDisplay from './CountdownDisplay';

const App = () => {
  return (
    <div>
      <h1>Countdown Timer</h1>
      <CountdownInput />
      <CountdownDisplay />
    </div>
  )
}

export default App;