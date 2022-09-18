import React from 'react';

import './Button.css';

const Button = props => {
  let blank=props.blankinput
  console.log(blank)

  return (
    <button type={props.type} className={`button ${!blank?"invalid1":''}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
