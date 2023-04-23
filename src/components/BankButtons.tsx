import { MouseEventHandler } from 'react'
import { BUTTON_NAMES } from '../constants/names'

export const BankButtons = ({
  handleBankBtnClick,
}: {
  handleBankBtnClick: MouseEventHandler
}) => {
  return (
    <div className="btn-container">
      <button id="bank1" className="bank-btn" onClick={handleBankBtnClick}>
        {BUTTON_NAMES.BANK1}
      </button>
      <button id="bank2" className="bank-btn" onClick={handleBankBtnClick}>
        {BUTTON_NAMES.BANK2}
      </button>
      <button id="bank3" className="bank-btn" onClick={handleBankBtnClick}>
        {BUTTON_NAMES.BANK3}
      </button>
    </div>
  )
}
