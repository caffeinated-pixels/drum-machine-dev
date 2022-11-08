import nodeActivated from '../samples/chaosEngine/nodeActivated.mp3'
import food from '../samples/chaosEngine/food.mp3'
import powerUp from '../samples/chaosEngine/powerUp.mp3'
import playerSaved from '../samples/chaosEngine/playerSaved.mp3'
import levelComplete from '../samples/chaosEngine/levelComplete.mp3'
import extraLife from '../samples/chaosEngine/extraLife.mp3'
import exitOpen from '../samples/chaosEngine/exitOpen.mp3'
import partyPower from '../samples/chaosEngine/partyPower.mp3'
import shield from '../samples/chaosEngine/shield.mp3'

export const chaosEngine = [
  {
    trigger: 'q',
    key: 'q',
    pad: 'padQ',
    name: 'Node-activated',
    src: nodeActivated,
  },
  {
    trigger: 'w',
    key: 'w',
    pad: 'padW',
    name: 'Food',
    src: food,
  },
  {
    trigger: 'e',
    key: 'e',
    pad: 'padE',
    name: 'Power-up',
    src: powerUp,
  },
  {
    trigger: 'a',
    key: 'a',
    pad: 'padA',
    name: 'Player-saved',
    src: playerSaved,
  },
  {
    trigger: 's',
    key: 's',
    pad: 'padS',
    name: 'Level-complete',
    src: levelComplete,
  },
  {
    trigger: 'd',
    key: 'd',
    pad: 'padD',
    name: 'Extra-life',
    src: extraLife,
  },
  {
    trigger: 'z',
    key: 'z',
    pad: 'padZ',
    name: 'Exit-open',
    src: exitOpen,
  },
  {
    trigger: 'x',
    key: 'x',
    pad: 'padX',
    name: 'Party-power',
    src: partyPower,
  },
  {
    trigger: 'c',
    key: 'c',
    pad: 'padC',
    name: 'Shield',
    src: shield,
  },
]
