import React from 'react'
import Display from './Display'
import BankButtons from './BankButtons'
import OtherButtons from './OtherButtons'

export default function LeftPanel(props) {
  return (
    <div className="left-panel">
      <Display
        bankName={props.bankName}
        display={props.display}
        volume={props.volume}
        power={props.power}
      />
      <BankButtons handleBankBtnClick={props.handleBankBtnClick} />
      <OtherButtons
        handlePowerBtn={props.handlePowerBtn}
        power={props.power}
        handleVolBtn={props.handleVolBtn}
      />
    </div>
  )
}
