import kick1 from '../samples/acoustic/kick1.mp3'
import kick2 from '../samples/acoustic/kick2.mp3'
import snare1 from '../samples/acoustic/snare1.mp3'
import snare2 from '../samples/acoustic/snare2.mp3'
import tom1 from '../samples/acoustic/tom1.mp3'
import tom2 from '../samples/acoustic/tom2.mp3'
import hihatClosed from '../samples/acoustic/hihatClosed.mp3'
import hihatOpen from '../samples/acoustic/hihatOpen.mp3'
import cymbalCrash from '../samples/acoustic/cymbalCrash.mp3'

export const acoustic = [
  {
    trigger: 'Q',
    keycode: 81,
    pad: 'padQ',
    name: 'Kick-1',
    src: kick1,
  },
  {
    trigger: 'W',
    keycode: 87,
    pad: 'padW',
    name: 'Kick-2',
    src: kick2,
  },
  {
    trigger: 'E',
    keycode: 69,
    pad: 'padE',
    name: 'Snare-1',
    src: snare1,
  },
  {
    trigger: 'A',
    keycode: 65,
    pad: 'padA',
    name: 'Snare-2',
    src: snare2,
  },
  {
    trigger: 'S',
    keycode: 83,
    pad: 'padS',
    name: 'Tom-1',
    src: tom1,
  },
  {
    trigger: 'D',
    keycode: 68,
    pad: 'padD',
    name: 'Tom-2',
    src: tom2,
  },
  {
    trigger: 'Z',
    keycode: 90,
    pad: 'padZ',
    name: 'Hihat-closed',
    src: hihatClosed,
  },
  {
    trigger: 'X',
    keycode: 88,
    pad: 'padX',
    name: 'Hihat-open',
    src: hihatOpen,
  },
  {
    trigger: 'C',
    keycode: 67,
    pad: 'padC',
    name: 'Cymbal-crash',
    src: cymbalCrash,
  },
]
