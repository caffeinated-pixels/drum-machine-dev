import { useState, useEffect, PointerEvent } from 'react'
import { LeftPanel, DrumPads } from './'
import { synthwave, acoustic, chaosEngine } from '../fixtures'
import { Howl, Howler } from 'howler'

export const MainBox = () => {
  const [currentSample, setCurrentSample] = useState('')
  const [soundBank, setSoundBank] = useState(synthwave)
  const [bankName, setBankName] = useState('Synthwave')
  const [activeElement, setActiveElement] = useState<string>('')
  const [power, setPower] = useState(true)
  const [volume, setVolume] = useState(1)

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)

    return () => document.removeEventListener('keydown', handleKeyPress)
  })

  const playSample = (name: string, audio: Howl) => {
    if (!power) return // check if power is on first!
    Howler.volume(volume)
    audio.play()
    setCurrentSample(name)
    setActiveElement(name)
  }

  const handleClick = ({ name, audio }: { name: string; audio: Howl }) => {
    playSample(name, audio)
  }

  const handleKeyPress = (event: KeyboardEvent) => {
    const sample = soundBank.find((sample) => sample.key === event.key)
    if (sample) playSample(sample.name, sample.audio)
  }

  const handleBankBtnClick = (event: PointerEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement

    if (target.id === 'bank1') {
      setSoundBank(synthwave)
      setBankName('Synthwave')
    } else if (target.id === 'bank2') {
      setSoundBank(acoustic)
      setBankName('Acoustic')
    } else if (target.id === 'bank3') {
      setSoundBank(chaosEngine)
      setBankName('Chaos Engine')
    }
  }

  const handlePowerBtn = () => {
    // flip power state boolean
    setPower((prevState) => !prevState)
    setCurrentSample('')
  }

  const handleVolBtn = (event: PointerEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement
    // find out which vol btn was pressed
    const whichBtn = target.id

    setVolume((prevState) => {
      if (whichBtn === 'vol-up' && prevState < 1) {
        return Number((prevState + 0.1).toFixed(1))
      } else if (whichBtn === 'vol-down' && prevState >= 0.1) {
        return Number((prevState - 0.1).toFixed(1))
      } else {
        return prevState
      }
      /* because of floating point precision errors we need to round the return val to 1 decimal place; tofixed() returns a string, so we convert back to a num using Number() */
    })
  }

  return (
    <div className="main-box">
      <LeftPanel
        display={currentSample}
        handleBankBtnClick={handleBankBtnClick}
        bankName={bankName}
        handlePowerBtn={handlePowerBtn}
        power={power}
        volume={volume}
        handleVolBtn={handleVolBtn}
      />
      <DrumPads
        handleClick={handleClick}
        soundBank={soundBank}
        activeElement={activeElement}
        setActiveElement={setActiveElement}
      />
    </div>
  )
}
