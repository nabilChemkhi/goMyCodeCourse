import React from 'react';
import Counter from './components/Counter';

const App = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 className="text-center">React App</h1>
      <div>
        <Counter />
      </div>
    </div>
  );
};

export default App;
