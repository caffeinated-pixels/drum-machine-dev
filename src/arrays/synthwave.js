import kick1 from '../samples/synthwave/kick1.mp3'
import kick2 from '../samples/synthwave/kick2.mp3'
import snare from '../samples/synthwave/snare.mp3'
import tom1 from '../samples/synthwave/tom1.mp3'
import tom2 from '../samples/synthwave/tom2.mp3'
import hihatClosed from '../samples/synthwave/hihatClosed.mp3'
import cymbalCrash from '../samples/synthwave/cymbalCrash.mp3'
import clap from '../samples/synthwave/clap.mp3'
import clapSnare from '../samples/synthwave/clapSnare.mp3'

const synthwave = [
  {
    trigger: 'Q',
    keycode: 81,
    pad: 'padQ',
    name: 'Kick-1',
    src: kick1
  },
  {
    trigger: 'W',
    keycode: 87,
    pad: 'padW',
    name: 'Kick-2',
    src: kick2
  },
  {
    trigger: 'E',
    keycode: 69,
    pad: 'padE',
    name: 'Snare',
    src: snare
  },
  {
    trigger: 'A',
    keycode: 65,
    pad: 'padA',
    name: 'Tom-1',
    src: tom1
  },
  {
    trigger: 'S',
    keycode: 83,
    pad: 'padS',
    name: 'Tom-2',
    src: tom2
  },
  {
    trigger: 'D',
    keycode: 68,
    pad: 'padD',
    name: 'Hihat-closed',
    src: hihatClosed
  },
  {
    trigger: 'Z',
    keycode: 90,
    pad: 'padZ',
    name: 'Cymbal-crash',
    src: cymbalCrash
  },
  {
    trigger: 'X',
    keycode: 88,
    pad: 'padX',
    name: 'Clap',
    src: clap
  },
  {
    trigger: 'C',
    keycode: 67,
    pad: 'padC',
    name: 'Clap-snare',
    src: clapSnare
  }
]

export default synthwave
