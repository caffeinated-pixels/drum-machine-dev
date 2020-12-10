import React from 'react'

export default function OtherButtons(props) {
  return (
    <div className="otherbtn-container">
      <div className="power-container">
        <button
          id="power"
          className={`${props.power ? 'powbtn-on' : 'powbtn-off'}`}
          onClick={props.handlePowerBtn}
        >
          On | Off
        </button>
      </div>

      <div className="volume-container">
        <button id="vol-up" className="bank-btn" onClick={props.handleVolBtn}>
          Vol+
        </button>
        <button id="vol-down" className="bank-btn" onClick={props.handleVolBtn}>
          Vol-
        </button>
      </div>
    </div>
  )
}
