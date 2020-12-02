import React from 'react'

function Display(props) {
  if (props.power) {
    return (
      <div id="display" className="no-select">
        <p>Bank: {props.bankName}</p>
        <p>Sample: {props.display}</p>
        <p>Volume: {props.volume}</p>
      </div>
    )
  } else {
    return <div id="display"></div>
  }
}

export default Display
