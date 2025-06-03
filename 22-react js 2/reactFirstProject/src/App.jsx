import React from 'react'
import Message from './components/Message'
import Button from './components/Button'

const App = () => {

 const handleClick = () => {
    console.log("Button clicked!");
  }
  const handleSubmit = () => {
    console.log("Submit clicked!");
  }
  // Uncomment the following line to use the handleClick function
  // const handleClick = (e) => {
  //   console.log("Button clicked!", e);
  // }
  return (
    // <div>
      
    //   {/* <Message  color="red" text="this is my message props"/> */}
    //   <Message color="blue" >
    //   <h2>Title</h2>
    //   This is my first message with children
    //   </Message>
  
    // </div>
    <div>
    <Button onBtnClick={handleClick} backgroundColor="blue" color="red">
      Click Me
    </Button>
    <Button onBtnClick={handleSubmit} backgroundColor="green" color="white">
      Submit
    </Button>
    </div>
  )
}

export default App
