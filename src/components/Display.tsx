import type {
  BankName,
  Display as DisplayType,
  Volume,
  Power,
} from '../types/general'

type Props = {
  bankName: BankName
  display: DisplayType
  power: Power
  volume: Volume
}

export const Display = ({ bankName, display, power, volume }: Props) => {
  return (
    <div className="display-container">
      <div id="display" className={power ? 'no-select' : 'hidden'}>
        <p>Bank: {bankName}</p>
        <p>Sample: {display}</p>
        <p>Volume: {volume}</p>
      </div>
    </div>
  )
}
