import React from 'react'

function Display(props) {
  return (
    <div className="display-container">
      <div id="display" className={props.power ? 'no-select' : 'hidden'}>
        <p>Bank: {props.bankName}</p>
        <p>Sample: {props.display}</p>
        <p>Volume: {props.volume}</p>
      </div>
    </div>
  )
}

export default Display
