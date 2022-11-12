type Props = {
  bankName: string
  display: string
  power: boolean
  volume: number
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
