import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
      }}
    >
      <h1 className="text-center">Counter</h1>
      <h1 className="border border-primary p-2 m-2 rounded">{count}</h1>
      <button className="btn btn-primary m-2" onClick={handleIncrement}>+</button>
      <button className="btn btn-danger m-2" onClick={handleDecrement}>-</button>
      <button className="btn btn-secondary m-2" onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
