import React from 'react';
// import * as buttonStyles from '../Styles/Button.css';


const Button = ({onClick, text}) => (
  <button onClick={onClick} >
    {text}
  </button>
)

export default Button