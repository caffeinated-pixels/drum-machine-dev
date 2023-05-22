import { createAudio } from '../utils/createAudio'
import type { Sample } from '../types/general'

export const synthwave: Sample[] = [
  {
    trigger: 'q',
    key: 'q',
    pad: 'padQ',
    name: 'Kick-1',
    audio: createAudio('/samples/synthwave/kick1.mp3'),
  },
  {
    trigger: 'w',
    key: 'w',
    pad: 'padW',
    name: 'Kick-2',
    audio: createAudio('/samples/synthwave/kick2.mp3'),
  },
  {
    trigger: 'e',
    key: 'e',
    pad: 'padE',
    name: 'Snare',
    audio: createAudio('/samples/synthwave/snare.mp3'),
  },
  {
    trigger: 'a',
    key: 'a',
    pad: 'padA',
    name: 'Tom-1',
    audio: createAudio('/samples/synthwave/tom1.mp3'),
  },
  {
    trigger: 's',
    key: 's',
    pad: 'padS',
    name: 'Tom-2',
    audio: createAudio('/samples/synthwave/tom2.mp3'),
  },
  {
    trigger: 'd',
    key: 'd',
    pad: 'padD',
    name: 'Hihat-closed',
    audio: createAudio('/samples/synthwave/hihatClosed.mp3'),
  },
  {
    trigger: 'z',
    key: 'z',
    pad: 'padZ',
    name: 'Cymbal-crash',
    audio: createAudio('/samples/synthwave/cymbalCrash.mp3'),
  },
  {
    trigger: 'x',
    key: 'x',
    pad: 'padX',
    name: 'Clap',
    audio: createAudio('/samples/synthwave/clap.mp3'),
  },
  {
    trigger: 'c',
    key: 'c',
    pad: 'padC',
    name: 'Clap-snare',
    audio: createAudio('/samples/synthwave/clapSnare.mp3'),
  },
]
