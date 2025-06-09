import React from 'react';

const Counter = () => {
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1 className='text-center'>Counter</h1>
      <h1 className='border border-primary p-2 m-2 rounded'>0</h1>
      <button className='btn btn-primary m-2'>+</button>
      <button className='btn btn-danger m-2'>-</button>
      <button className='btn btn-secondary m-2'>Reset</button>
    </div>
  );
};

export default Counter;
