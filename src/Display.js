import React from 'react'

export default function Display(props) {
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
