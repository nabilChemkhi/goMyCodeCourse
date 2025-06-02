import React from 'react'
import Message from './components/Message'

const App = () => {

  //logic in js
  const name = 'Nabil'
  const getName = () => {
    return 'Nabil'
  }

  return (
    <div>
      {/* JSX */}
      
      <Message />
      
      <h1>Hello {name} {getName()} {2 + 2} </h1>
    </div>
  )
}

export default App
