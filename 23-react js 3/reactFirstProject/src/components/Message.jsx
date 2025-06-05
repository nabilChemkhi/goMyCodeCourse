import React from 'react'

const Message = (props) => {
  console.log(props);
  return (
    <div>
      <h1 style={{ color: props.color }}> 
        {props.children  }
      </h1>
    </div>
  )
}

export default Message
