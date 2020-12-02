import React from 'react'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import synthwave from './arrays/synthwave'
import acoustic from './arrays/acoustic'
import chaosEngine from './arrays/chaos-engine'

// moved state & playSample up so both LP & RP have access via props
class MainBox extends React.Component {
  constructor() {
    super()
    this.state = {
      currentSample: '',
      soundBank: synthwave,
      bankName: 'Synthwave',
      power: true,
      volume: 1
    }
    this.playSample = this.playSample.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleBankBtnClick = this.handleBankBtnClick.bind(this)
    this.handlePowerBtn = this.handlePowerBtn.bind(this)
    this.handleVolBtn = this.handleVolBtn.bind(this)
  }

  componentDidMount() {
    // add event listener for drumpad keypresses
    document.addEventListener('keydown', this.handleKeyPress)
    // add event listener for removing css animation class
    document.addEventListener('animationend', event =>
      document.getElementById(event.target.id).classList.remove('pad-anim')
    )
  }

  playSample(elementId) {
    const element = document.getElementById(elementId)

    // check if power is on first!
    if (this.state.power) {
      // add class to trigger css animation
      element.classList.add('pad-anim')
      element.firstChild.volume = this.state.volume

      // need to use play() method on nested <audio> element
      document.getElementById(elementId).firstChild.play()
      this.setState(prevState => ({ ...prevState, currentSample: elementId }))
    }
  }

  handleClick(event) {
    this.playSample(event.target.id)
  }

  handleKeyPress(event) {
    // use keycode to to get sample name
    const elementId = this.state.soundBank.filter(
      entry => entry.keycode === event.keyCode
    )

    if (elementId[0]) this.playSample(elementId[0].name)
  }

  handleBankBtnClick(event) {
    let { soundBank, bankName } = this.state

    if (event.target.id === 'bank1') {
      soundBank = synthwave
      bankName = 'Synthwave'
    } else if (event.target.id === 'bank2') {
      soundBank = acoustic
      bankName = 'Acoustic'
    } else if (event.target.id === 'bank3') {
      soundBank = chaosEngine
      bankName = 'Chaos Engine'
    }

    this.setState(prevState => ({
      ...prevState,
      soundBank: soundBank,
      bankName: bankName,
      currentSample: ''
    }))
  }

  handlePowerBtn() {
    // flip power state boolean
    this.setState(prevState => ({
      ...prevState,
      power: !prevState.power,
      currentSample: ''
    }))
  }

  handleVolBtn(event) {
    // find out which vol btn was pressed
    const whichBtn = event.target.id
    this.setState(prevState => {
      if (whichBtn === 'vol-up' && prevState.volume < 1) {
        return {
          ...prevState,
          volume: Number((prevState.volume + 0.1).toFixed(1))
        }
      } else if (whichBtn === 'vol-down' && prevState.volume >= 0.1) {
        return {
          ...prevState,
          volume: Number((prevState.volume - 0.1).toFixed(1))
        }
      }
      /* because of floating point precision errors we need to round the return val to 1 decimal place; tofixed() returns a string, so we convert back to a num using Number() */
    })
  }

  render() {
    return (
      <div className="main-box">
        <LeftPanel
          display={this.state.currentSample}
          handleBankBtnClick={this.handleBankBtnClick}
          bankName={this.state.bankName}
          handlePowerBtn={this.handlePowerBtn}
          power={this.state.power}
          volume={this.state.volume}
          handleVolBtn={this.handleVolBtn}
        />
        <RightPanel
          handleClick={this.handleClick}
          soundBank={this.state.soundBank}
          activePad={this.state.activePad}
          power={this.state.power}
        />
      </div>
    )
  }
}

export default MainBox
