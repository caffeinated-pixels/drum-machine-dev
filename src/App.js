import React from 'react'
import './index.scss'

// SoundBank arrays
const synthwave = [
  {
    trigger: 'Q',
    keycode: 81,
    pad: 'padQ',
    name: 'Kick-1',
    src:
      'https://raw.githubusercontent.com/caffeinated-pixels/drum-samples/main/synthwave/Kick-1.mp3'
  },
  {
    trigger: 'W',
    keycode: 87,
    pad: 'padW',
    name: 'Kick-2',
    src:
      'https://raw.githubusercontent.com/caffeinated-pixels/drum-samples/main/synthwave/Kick-2.mp3'
  },
  {
    trigger: 'E',
    keycode: 69,
    pad: 'padE',
    name: 'Snare',
    src:
      'https://raw.githubusercontent.com/caffeinated-pixels/drum-samples/main/synthwave/Snare.mp3'
  },
  {
    trigger: 'A',
    keycode: 65,
    pad: 'padA',
    name: 'Tom-1',
    src:
      'https://raw.githubusercontent.com/caffeinated-pixels/drum-samples/main/synthwave/Tom-1.mp3'
  },
  {
    trigger: 'S',
    keycode: 83,
    pad: 'padS',
    name: 'Tom-2',
    src:
      'https://raw.githubusercontent.com/caffeinated-pixels/drum-samples/main/synthwave/Tom-2.mp3'
  },
  {
    trigger: 'D',
    keycode: 68,
    pad: 'padD',
    name: 'Hihat-closed',
    src:
      'https://raw.githubusercontent.com/caffeinated-pixels/drum-samples/main/synthwave/Hihat-closed.mp3'
  },
  {
    trigger: 'Z',
    keycode: 90,
    pad: 'padZ',
    name: 'Cymbal-crash',
    src:
      'https://raw.githubusercontent.com/caffeinated-pixels/drum-samples/main/synthwave/Cymbol-Crash.mp3'
  },
  {
    trigger: 'X',
    keycode: 88,
    pad: 'padX',
    name: 'Clap',
    src:
      'https://raw.githubusercontent.com/caffeinated-pixels/drum-samples/main/synthwave/Clap.mp3'
  },
  {
    trigger: 'C',
    keycode: 67,
    pad: 'padC',
    name: 'Clap-snare',
    src:
      'https://raw.githubusercontent.com/caffeinated-pixels/drum-samples/main/synthwave/Clap%2BSnare.mp3'
  }
]

const acoustic = [
  {
    trigger: 'Q',
    keycode: 81,
    pad: 'padQ',
    name: 'Kick-1',
    src:
      'https://raw.githubusercontent.com/caffeinated-pixels/drum-samples/main/acoustic/Kick-1.mp3'
  },
  {
    trigger: 'W',
    keycode: 87,
    pad: 'padW',
    name: 'Kick-2',
    src:
      'https://raw.githubusercontent.com/caffeinated-pixels/drum-samples/main/acoustic/Kick-2.mp3'
  },
  {
    trigger: 'E',
    keycode: 69,
    pad: 'padE',
    name: 'Snare-1',
    src:
      'https://raw.githubusercontent.com/caffeinated-pixels/drum-samples/main/acoustic/Snare-1.mp3'
  },
  {
    trigger: 'A',
    keycode: 65,
    pad: 'padA',
    name: 'Snare-2',
    src:
      'https://raw.githubusercontent.com/caffeinated-pixels/drum-samples/main/acoustic/Snare-2.mp3'
  },
  {
    trigger: 'S',
    keycode: 83,
    pad: 'padS',
    name: 'Tom-1',
    src:
      'https://raw.githubusercontent.com/caffeinated-pixels/drum-samples/main/acoustic/Tom-1.mp3'
  },
  {
    trigger: 'D',
    keycode: 68,
    pad: 'padD',
    name: 'Tom-2',
    src:
      'https://raw.githubusercontent.com/caffeinated-pixels/drum-samples/main/acoustic/Tom-2.mp3'
  },
  {
    trigger: 'Z',
    keycode: 90,
    pad: 'padZ',
    name: 'Hihat-closed',
    src:
      'https://raw.githubusercontent.com/caffeinated-pixels/drum-samples/main/acoustic/Hihat-closed.mp3'
  },
  {
    trigger: 'X',
    keycode: 88,
    pad: 'padX',
    name: 'Hihat-open',
    src:
      'https://raw.githubusercontent.com/caffeinated-pixels/drum-samples/main/acoustic/Hihat-open.mp3'
  },
  {
    trigger: 'C',
    keycode: 67,
    pad: 'padC',
    name: 'Cymbal-crash',
    src:
      'https://raw.githubusercontent.com/caffeinated-pixels/drum-samples/main/acoustic/Cymbal-crash.mp3'
  }
]

const chaosEngine = [
  {
    trigger: 'Q',
    keycode: 81,
    pad: 'padQ',
    name: 'Node-activated',
    src:
      'https://raw.githubusercontent.com/caffeinated-pixels/drum-samples/main/chaosengine/Node%20activated.mp3'
  },
  {
    trigger: 'W',
    keycode: 87,
    pad: 'padW',
    name: 'Food',
    src:
      'https://raw.githubusercontent.com/caffeinated-pixels/drum-samples/main/chaosengine/Food.mp3'
  },
  {
    trigger: 'E',
    keycode: 69,
    pad: 'padE',
    name: 'Power-up',
    src:
      'https://raw.githubusercontent.com/caffeinated-pixels/drum-samples/main/chaosengine/Power%20up.mp3'
  },
  {
    trigger: 'A',
    keycode: 65,
    pad: 'padA',
    name: 'Player-saved',
    src:
      'https://raw.githubusercontent.com/caffeinated-pixels/drum-samples/main/chaosengine/Player%20saved.mp3'
  },
  {
    trigger: 'S',
    keycode: 83,
    pad: 'padS',
    name: 'Level-complete',
    src:
      'https://raw.githubusercontent.com/caffeinated-pixels/drum-samples/main/chaosengine/Level%20complete.mp3'
  },
  {
    trigger: 'D',
    keycode: 68,
    pad: 'padD',
    name: 'Extra-life',
    src:
      'https://raw.githubusercontent.com/caffeinated-pixels/drum-samples/main/chaosengine/Extra%20life.mp3'
  },
  {
    trigger: 'Z',
    keycode: 90,
    pad: 'padZ',
    name: 'Exit-open',
    src:
      'https://raw.githubusercontent.com/caffeinated-pixels/drum-samples/main/chaosengine/Exit%20open.mp3'
  },
  {
    trigger: 'X',
    keycode: 88,
    pad: 'padX',
    name: 'Party-power',
    src:
      'https://raw.githubusercontent.com/caffeinated-pixels/drum-samples/main/chaosengine/Party%20Power.mp3'
  },
  {
    trigger: 'C',
    keycode: 67,
    pad: 'padC',
    name: 'Shield',
    src:
      'https://raw.githubusercontent.com/caffeinated-pixels/drum-samples/main/chaosengine/Shield.mp3'
  }
]

function TopBar() {
  return (
    <div className="top-bar">
      <p>
        Mercenary <span className="thin">Instruments</span>{' '}
        <span className="model">LV-426</span>
      </p>
      <img
        className="logo"
        src="https://thecakeisaliegaming.files.wordpress.com/2020/11/mercenary-32x32-1.png"
        alt="Mercenary Instruments logo"
      />
    </div>
  )
}

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

function BottomBar() {
  return (
    <div className="bottom-bar text-center">
      <p>
        Coded & abused by&nbsp;
        <a
          href="https://steviegill-webportfolio.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Stevie Gill
        </a>
      </p>
    </div>
  )
}

function App() {
  return (
    <div id="drum-machine">
      <TopBar />
      <MainBox />
      <BottomBar />
    </div>
  )
}

export default App
