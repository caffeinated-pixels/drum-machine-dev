import { useState, useEffect } from 'react'
import { LeftPanel, DrumPads } from './'
import { synthwave, acoustic, chaosEngine } from '../fixtures'

export const MainBox = () => {
  const [currentSample, setCurrentSample] = useState('')
  const [soundBank, setSoundBank] = useState(synthwave)
  const [bankName, setBankName] = useState('Synthwave')
  const [power, setPower] = useState(true)
  const [volume, setVolume] = useState(1)

  useEffect(() => {
    // add event listener for DrumPads keypresses
    document.addEventListener('keydown', handleKeyPress)
    // add event listener for removing css animation class
    document.addEventListener('animationend', removeAnimClass)

    // need to remove event Listeners to prevent issues (similar to componentWillUnmount)
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
      // document.removeEventListener('animationend', removeAnimClass)
    }
  })

  const playSample = (elementId: string) => {
    if (!power) return // check if power is on first!
    setCurrentSample(elementId)
    const parentDiv = document.getElementById(elementId) as HTMLDivElement
    const audioElement = parentDiv.firstChild as HTMLAudioElement

    // add class to trigger css animation
    parentDiv.classList.add('pad-anim')

    // need to use play() method on nested <audio> element
    audioElement.volume = volume
    audioElement.play()
  }

  const handleClick = (event) => {
    playSample(event.target.id)
  }

  const handleKeyPress = (event: KeyboardEvent) => {
    console.log(event.key)
    // use keycode to to get sample name
    // const elementId = soundBank.filter((entry) => entry.key === event.key)

    // if (elementId[0]) playSample(elementId[0].name)
  }

  const removeAnimClass = (event) => {
    document.getElementById(event.target.id).classList.remove('pad-anim')
  }

  const handleBankBtnClick = (event) => {
    if (event.target.id === 'bank1') {
      setSoundBank(synthwave)
      setBankName('Synthwave')
    } else if (event.target.id === 'bank2') {
      setSoundBank(acoustic)
      setBankName('Acoustic')
    } else if (event.target.id === 'bank3') {
      setSoundBank(chaosEngine)
      setBankName('Chaos Engine')
    }
  }

  const handlePowerBtn = () => {
    // flip power state boolean
    setPower((prevState) => !prevState)
    setCurrentSample('')
  }

  const handleVolBtn = (event) => {
    // find out which vol btn was pressed
    const whichBtn = event.target.id

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
      <DrumPads handleClick={handleClick} soundBank={soundBank} />
    </div>
  )
}
