import nodeActivated from '../samples/chaosEngine/nodeActivated.mp3'
import food from '../samples/chaosEngine/food.mp3'
import powerUp from '../samples/chaosEngine/powerUp.mp3'
import playerSaved from '../samples/chaosEngine/playerSaved.mp3'
import levelComplete from '../samples/chaosEngine/levelComplete.mp3'
import extraLife from '../samples/chaosEngine/extraLife.mp3'
import exitOpen from '../samples/chaosEngine/exitOpen.mp3'
import partyPower from '../samples/chaosEngine/partyPower.mp3'
import shield from '../samples/chaosEngine/shield.mp3'

import { createAudio } from '../utils/createAudio'
import type { Sample } from '../types/general'

export const chaosEngine: Sample[] = [
  {
    trigger: 'q',
    key: 'q',
    pad: 'padQ',
    name: 'Node-activated',
    audio: createAudio(nodeActivated),
  },
  {
    trigger: 'w',
    key: 'w',
    pad: 'padW',
    name: 'Food',
    audio: createAudio(food),
  },
  {
    trigger: 'e',
    key: 'e',
    pad: 'padE',
    name: 'Power-up',
    audio: createAudio(powerUp),
  },
  {
    trigger: 'a',
    key: 'a',
    pad: 'padA',
    name: 'Player-saved',
    audio: createAudio(playerSaved),
  },
  {
    trigger: 's',
    key: 's',
    pad: 'padS',
    name: 'Level-complete',
    audio: createAudio(levelComplete),
  },
  {
    trigger: 'd',
    key: 'd',
    pad: 'padD',
    name: 'Extra-life',
    audio: createAudio(extraLife),
  },
  {
    trigger: 'z',
    key: 'z',
    pad: 'padZ',
    name: 'Exit-open',
    audio: createAudio(exitOpen),
  },
  {
    trigger: 'x',
    key: 'x',
    pad: 'padX',
    name: 'Party-power',
    audio: createAudio(partyPower),
  },
  {
    trigger: 'c',
    key: 'c',
    pad: 'padC',
    name: 'Shield',
    audio: createAudio(shield),
  },
]
