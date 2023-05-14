import { createAudio } from '../utils/createAudio'
import type { Sample } from '../types/general'

export const chaosEngine: Sample[] = [
  {
    trigger: 'q',
    key: 'q',
    pad: 'padQ',
    name: 'Node-activated',
    audio: createAudio('/samples/chaosEngine/nodeActivated.mp3'),
  },
  {
    trigger: 'w',
    key: 'w',
    pad: 'padW',
    name: 'Food',
    audio: createAudio('/samples/chaosEngine/food.mp3'),
  },
  {
    trigger: 'e',
    key: 'e',
    pad: 'padE',
    name: 'Power-up',
    audio: createAudio('/samples/chaosEngine/powerUp.mp3'),
  },
  {
    trigger: 'a',
    key: 'a',
    pad: 'padA',
    name: 'Player-saved',
    audio: createAudio('/samples/chaosEngine/playerSaved.mp3'),
  },
  {
    trigger: 's',
    key: 's',
    pad: 'padS',
    name: 'Level-complete',
    audio: createAudio('/samples/chaosEngine/levelComplete.mp3'),
  },
  {
    trigger: 'd',
    key: 'd',
    pad: 'padD',
    name: 'Extra-life',
    audio: createAudio('/samples/chaosEngine/extraLife.mp3'),
  },
  {
    trigger: 'z',
    key: 'z',
    pad: 'padZ',
    name: 'Exit-open',
    audio: createAudio('/samples/chaosEngine/exitOpen.mp3'),
  },
  {
    trigger: 'x',
    key: 'x',
    pad: 'padX',
    name: 'Party-power',
    audio: createAudio('/samples/chaosEngine/partyPower.mp3'),
  },
  {
    trigger: 'c',
    key: 'c',
    pad: 'padC',
    name: 'Shield',
    audio: createAudio('/samples/chaosEngine/shield.mp3'),
  },
]
