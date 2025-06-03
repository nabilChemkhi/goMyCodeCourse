import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onBtnClick} style={{ backgroundColor: props.color , color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
      {props.children}
    </button>
  )
}

export default Button
