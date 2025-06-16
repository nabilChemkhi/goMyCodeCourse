
import { useEffect } from 'react'
import './App.css'
import axios from 'axios';
import React, { useState } from 'react';

function App() {
const [users, setUsers] = useState([]);


  useEffect(() => {
    // This is a placeholder for any side effects or initializations
    console.log('App component mounted');
    axios.get('https://jsonplaceholder.typicode.com/posts').
      then(response => {
        setUsers(response.data)
      })
      
  }
  , []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.title}</h2>
          <p>{user.body}</p>
        </div>
      ))}
    </div>
  );
};

export default App
