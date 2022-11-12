import type {
  BankName,
  Display as DisplayType,
  Volume,
  Power,
} from '../types/general'
import { MouseEventHandler } from 'react'
import { Display, BankButtons, OtherButtons } from './'

type Props = {
  bankName: BankName
  display: DisplayType
  volume: Volume
  power: Power
  handleBankBtnClick: MouseEventHandler
  handlePowerBtn: () => void
  handleVolBtn: MouseEventHandler
}

export const LeftPanel = ({
  bankName,
  display,
  volume,
  power,
  handleBankBtnClick,
  handlePowerBtn,
  handleVolBtn,
}: Props) => {
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
