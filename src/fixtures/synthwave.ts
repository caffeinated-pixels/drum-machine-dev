import kick1 from '../samples/synthwave/kick1.mp3'
import kick2 from '../samples/synthwave/kick2.mp3'
import snare from '../samples/synthwave/snare.mp3'
import tom1 from '../samples/synthwave/tom1.mp3'
import tom2 from '../samples/synthwave/tom2.mp3'
import hihatClosed from '../samples/synthwave/hihatClosed.mp3'
import cymbalCrash from '../samples/synthwave/cymbalCrash.mp3'
import clap from '../samples/synthwave/clap.mp3'
import clapSnare from '../samples/synthwave/clapSnare.mp3'

import type { Sample } from '../types/general'

export const synthwave: Sample[] = [
  {
    trigger: 'q',
    key: 'q',
    pad: 'padQ',
    name: 'Kick-1',
    audio: new Audio(kick1),
  },
  {
    trigger: 'w',
    key: 'w',
    pad: 'padW',
    name: 'Kick-2',
    audio: new Audio(kick2),
  },
  {
    trigger: 'e',
    key: 'e',
    pad: 'padE',
    name: 'Snare',
    audio: new Audio(snare),
  },
  {
    trigger: 'a',
    key: 'a',
    pad: 'padA',
    name: 'Tom-1',
    audio: new Audio(tom1),
  },
  {
    trigger: 's',
    key: 's',
    pad: 'padS',
    name: 'Tom-2',
    audio: new Audio(tom2),
  },
  {
    trigger: 'd',
    key: 'd',
    pad: 'padD',
    name: 'Hihat-closed',
    audio: new Audio(hihatClosed),
  },
  {
    trigger: 'z',
    key: 'z',
    pad: 'padZ',
    name: 'Cymbal-crash',
    audio: new Audio(cymbalCrash),
  },
  {
    trigger: 'x',
    key: 'x',
    pad: 'padX',
    name: 'Clap',
    audio: new Audio(clap),
  },
  {
    trigger: 'c',
    key: 'c',
    pad: 'padC',
    name: 'Clap-snare',
    audio: new Audio(clapSnare),
  },
]
