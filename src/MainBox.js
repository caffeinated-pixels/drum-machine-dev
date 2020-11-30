import React from 'react'
import synthwave from './arrays/synthwave'
import acoustic from './arrays/acoustic'
import chaosEngine from './arrays/chaos-engine'

function BankButtons(props) {
  return (
    <div className="btn-container">
      <button
        id="bank1"
        className="bank-btn"
        onClick={props.handleBankBtnClick}
      >
        Bank 1
      </button>
      <button
        id="bank2"
        className="bank-btn"
        onClick={props.handleBankBtnClick}
      >
        Bank 2
      </button>
      <button
        id="bank3"
        className="bank-btn"
        onClick={props.handleBankBtnClick}
      >
        Bank 3
      </button>
    </div>
  )
}

function OtherButtons(props) {
  return (
    <div className="otherbtn-container">
      <div className="power-container">
        <button
          id="power"
          className={`${props.power ? 'powbtn-on' : 'powbtn-off'}`}
          onClick={props.handlePowerBtn}
        >
          On | Off
        </button>
      </div>

      <div className="volume-container">
        <button id="vol-up" className="bank-btn" onClick={props.handleVolBtn}>
          Vol+
        </button>
        <button id="vol-down" className="bank-btn" onClick={props.handleVolBtn}>
          Vol-
        </button>
      </div>
    </div>
  )
}

function Display(props) {
  if (props.power) {
    return (
      <div id="display" className="no-select">
        <p>Bank: {props.bankName}</p>
        <p>Sample: {props.display}</p>
        <p>Volume: {props.volume}</p>
      </div>
    )
  } else {
    return <div id="display"></div>
  }
}

function LeftPanel(props) {
  return (
    <div className="left-panel">
      <Display
        bankName={props.bankName}
        display={props.display}
        volume={props.volume}
        power={props.power}
      />
      <BankButtons handleBankBtnClick={props.handleBankBtnClick} />
      <OtherButtons
        handlePowerBtn={props.handlePowerBtn}
        power={props.power}
        handleVolBtn={props.handleVolBtn}
      />
    </div>
  )
}

function RightPanel(props) {
  const drumpads = props.soundBank.map((entry, i) => {
    return (
      <div
        key={i}
        id={entry.name}
        className={`drum-pad ${entry.pad} `}
        onClick={props.handleClick}
      >
        <audio
          id={entry.trigger}
          className="clip"
          src={entry.src}
          preload="auto"
        >
          {' '}
        </audio>
        {entry.trigger}
      </div>
    )
  })

  return <div className="right-panel no-select">{drumpads}</div>
}

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
