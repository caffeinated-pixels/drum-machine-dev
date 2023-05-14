import { createAudio } from '../utils/createAudio'
import type { Sample } from '../types/general'

export const acoustic: Sample[] = [
  {
    trigger: 'q',
    key: 'q',
    pad: 'padQ',
    name: 'Kick-1',
    audio: createAudio('/samples/acoustic/kick1.mp3'),
  },
  {
    trigger: 'w',
    key: 'w',
    pad: 'padW',
    name: 'Kick-2',
    audio: createAudio('/samples/acoustic/kick2.mp3'),
  },
  {
    trigger: 'e',
    key: 'e',
    pad: 'padE',
    name: 'Snare-1',
    audio: createAudio('/samples/acoustic/snare1.mp3'),
  },
  {
    trigger: 'a',
    key: 'a',
    pad: 'padA',
    name: 'Snare-2',
    audio: createAudio('/samples/acoustic/snare2.mp3'),
  },
  {
    trigger: 's',
    key: 's',
    pad: 'padS',
    name: 'Tom-1',
    audio: createAudio('/samples/acoustic/tom1.mp3'),
  },
  {
    trigger: 'd',
    key: 'd',
    pad: 'padD',
    name: 'Tom-2',
    audio: createAudio('/samples/acoustic/tom2.mp3'),
  },
  {
    trigger: 'z',
    key: 'z',
    pad: 'padZ',
    name: 'Hihat-closed',
    audio: createAudio('/samples/acoustic/hihatClosed.mp3'),
  },
  {
    trigger: 'x',
    key: 'x',
    pad: 'padX',
    name: 'Hihat-open',
    audio: createAudio('/samples/acoustic/hihatOpen.mp3'),
  },
  {
    trigger: 'c',
    key: 'c',
    pad: 'padC',
    name: 'Cymbal-crash',
    audio: createAudio('/samples/acoustic/cymbalCrash.mp3'),
  },
]
