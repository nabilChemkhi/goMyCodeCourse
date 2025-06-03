import React from 'react'
import Message from './components/Message'

const App = () => {

 

  return (
    <div>
      
      {/* <Message  color="red" text="this is my message props"/> */}
      <Message color="blue" >
      <h2>Title</h2>
      This is my first message with children
      </Message>
      
  
    </div>
  )
}

export default App
