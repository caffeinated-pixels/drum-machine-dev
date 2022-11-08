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
    trigger: 'q',
    key: 'q',
    pad: 'padQ',
    name: 'Kick-1',
    src: kick1,
  },
  {
    trigger: 'w',
    key: 'w',
    pad: 'padW',
    name: 'Kick-2',
    src: kick2,
  },
  {
    trigger: 'e',
    key: 'e',
    pad: 'padE',
    name: 'Snare-1',
    src: snare1,
  },
  {
    trigger: 'a',
    key: 'a',
    pad: 'padA',
    name: 'Snare-2',
    src: snare2,
  },
  {
    trigger: 's',
    key: 's',
    pad: 'padS',
    name: 'Tom-1',
    src: tom1,
  },
  {
    trigger: 'd',
    key: 'd',
    pad: 'padD',
    name: 'Tom-2',
    src: tom2,
  },
  {
    trigger: 'z',
    key: 'z',
    pad: 'padZ',
    name: 'Hihat-closed',
    src: hihatClosed,
  },
  {
    trigger: 'x',
    key: 'x',
    pad: 'padX',
    name: 'Hihat-open',
    src: hihatOpen,
  },
  {
    trigger: 'c',
    key: 'c',
    pad: 'padC',
    name: 'Cymbal-crash',
    src: cymbalCrash,
  },
]
