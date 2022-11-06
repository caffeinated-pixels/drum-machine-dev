export const OtherButtons = ({ handlePowerBtn, handleVolBtn, power }) => {
  return (
    <div className="otherbtn-container">
      <div className="power-container">
        <button
          id="power"
          className={`${power ? 'powbtn-on' : 'powbtn-off'}`}
          onClick={handlePowerBtn}
        >
          On | Off
        </button>
      </div>

      <div className="volume-container">
        <button id="vol-up" className="bank-btn" onClick={handleVolBtn}>
          Vol+
        </button>
        <button id="vol-down" className="bank-btn" onClick={handleVolBtn}>
          Vol-
        </button>
      </div>
    </div>
  )
}
