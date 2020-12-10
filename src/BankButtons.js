import React from 'react'

export default function BankButtons(props) {
  return (
    <div className="btn-container">
      <button
        id="bank1"
        className="bank-btn"
        onClick={props.handleBankBtnClick}
      >
        Bank 1
      </button>
      <button
        id="bank2"
        className="bank-btn"
        onClick={props.handleBankBtnClick}
      >
        Bank 2
      </button>
      <button
        id="bank3"
        className="bank-btn"
        onClick={props.handleBankBtnClick}
      >
        Bank 3
      </button>
    </div>
  )
}
