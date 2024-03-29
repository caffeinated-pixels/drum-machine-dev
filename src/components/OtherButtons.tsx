import { MouseEventHandler } from 'react'
import type { Power } from '../types/general'

type Props = {
  handlePowerBtn: () => void
  handleVolBtn: MouseEventHandler
  power: Power
}

export const OtherButtons = ({
  handlePowerBtn,
  handleVolBtn,
  power,
}: Props) => {
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
