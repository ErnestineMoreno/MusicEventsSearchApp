import React from 'react';
// eslint-disable-next-line
import Background from './Background.css';


const background = props => (
//adding the onClick listener and execute what I have in my click prop
<div className="background" onClick={props.click} />
);


export default background;
