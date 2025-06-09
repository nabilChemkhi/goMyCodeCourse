import React from 'react'

const Message = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Message Component</h1>
      <div style={{ color: props.color }}>{props.children}</div>
    </div>
  )
}

export default Message
