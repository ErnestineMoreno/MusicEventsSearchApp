import React from 'react'
// eslint-disable-next-line
import Background from './Background.css';

// Hou comment: I'd move this component into the src/components folder. Also component names are Pascal-cased by convention (i.e., const Background = props...)
const background = props => (
// adding the onClick listener and execute what I have in my click prop
  <div className='background' onClick={props.click} />
)

export default background
