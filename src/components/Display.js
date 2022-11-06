export const Display = ({ bankName, display, power, volume }) => {
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
