import { Display, BankButtons, OtherButtons } from './'

export const LeftPanel = ({
  bankName,
  display,
  volume,
  power,
  handleBankBtnClick,
  handlePowerBtn,
  handleVolBtn,
}) => {
  return (
    <div className="left-panel">
      <Display
        bankName={bankName}
        display={display}
        volume={volume}
        power={power}
      />
      <BankButtons handleBankBtnClick={handleBankBtnClick} />
      <OtherButtons
        handlePowerBtn={handlePowerBtn}
        power={power}
        handleVolBtn={handleVolBtn}
      />
    </div>
  )
}
