import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onBtnClick} style={{ backgroundColor: props.color , color: props.color }}>
      {props.children}
    </button>
  )
}

export default Button
