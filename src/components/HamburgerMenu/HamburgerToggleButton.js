import React from 'react'
import './HamburgerToggleButton.css'

const hamburgerToggleButton = props => (
  // adding an onClickListener, when this gets triggered I'll execute the method I received on props.click. passing around a reference from the hamburgertoggleclickhandler. props click holds a method of the function like an address
  <button className='toggle-button' onClick={props.click}>
    <div className='toggle-button-divs' />
    <div className='toggle-button-divs' />
    <div className='toggle-button-divs' />
  </button>
)

export default hamburgerToggleButton
