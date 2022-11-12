import nodeActivated from '../samples/chaosEngine/nodeActivated.mp3'
import food from '../samples/chaosEngine/food.mp3'
import powerUp from '../samples/chaosEngine/powerUp.mp3'
import playerSaved from '../samples/chaosEngine/playerSaved.mp3'
import levelComplete from '../samples/chaosEngine/levelComplete.mp3'
import extraLife from '../samples/chaosEngine/extraLife.mp3'
import exitOpen from '../samples/chaosEngine/exitOpen.mp3'
import partyPower from '../samples/chaosEngine/partyPower.mp3'
import shield from '../samples/chaosEngine/shield.mp3'

import type { Sample } from '../types/general'

export const chaosEngine: Sample[] = [
  {
    trigger: 'q',
    key: 'q',
    pad: 'padQ',
    name: 'Node-activated',
    audio: new Audio(nodeActivated),
  },
  {
    trigger: 'w',
    key: 'w',
    pad: 'padW',
    name: 'Food',
    audio: new Audio(food),
  },
  {
    trigger: 'e',
    key: 'e',
    pad: 'padE',
    name: 'Power-up',
    audio: new Audio(powerUp),
  },
  {
    trigger: 'a',
    key: 'a',
    pad: 'padA',
    name: 'Player-saved',
    audio: new Audio(playerSaved),
  },
  {
    trigger: 's',
    key: 's',
    pad: 'padS',
    name: 'Level-complete',
    audio: new Audio(levelComplete),
  },
  {
    trigger: 'd',
    key: 'd',
    pad: 'padD',
    name: 'Extra-life',
    audio: new Audio(extraLife),
  },
  {
    trigger: 'z',
    key: 'z',
    pad: 'padZ',
    name: 'Exit-open',
    audio: new Audio(exitOpen),
  },
  {
    trigger: 'x',
    key: 'x',
    pad: 'padX',
    name: 'Party-power',
    audio: new Audio(partyPower),
  },
  {
    trigger: 'c',
    key: 'c',
    pad: 'padC',
    name: 'Shield',
    audio: new Audio(shield),
  },
]
