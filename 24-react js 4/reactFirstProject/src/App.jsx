import React from 'react'
import Message from './components/Message'


const App = () => {



  return (
   
    <div>

    <h1>My App</h1>

    <Message color="blue">
      <h2>Title</h2>
      This is my first message with children
    </Message>
    
    </div>
  )
}

export default App
