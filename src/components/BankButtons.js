export const BankButtons = ({ handleBankBtnClick }) => {
  return (
    <div className="btn-container">
      <button id="bank1" className="bank-btn" onClick={handleBankBtnClick}>
        Bank 1
      </button>
      <button id="bank2" className="bank-btn" onClick={handleBankBtnClick}>
        Bank 2
      </button>
      <button id="bank3" className="bank-btn" onClick={handleBankBtnClick}>
        Bank 3
      </button>
    </div>
  )
}
