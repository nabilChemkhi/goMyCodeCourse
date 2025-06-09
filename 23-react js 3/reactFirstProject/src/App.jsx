import React from 'react'

const App = () => {

  const name = 'John Doe'
  const add = (a,b) =>{return a+b}
  

  return (
    <div>
      <h1>Hello {name} </h1>
      {add(1,2)}
      
    </div>
  )
}

export default App
