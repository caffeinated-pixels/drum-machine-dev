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
    <div className="display-container" data-testid="display">
      <div id="display" className="no-select">
        {power && (
          <>
            <p>Bank: {bankName}</p>
            <p>Sample: {display}</p>
            <p>Volume: {volume}</p>
          </>
        )}
      </div>
    </div>
  )
}
