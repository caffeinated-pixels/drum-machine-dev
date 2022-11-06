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
    trigger: 'Q',
    keycode: 81,
    pad: 'padQ',
    name: 'Node-activated',
    src: nodeActivated,
  },
  {
    trigger: 'W',
    keycode: 87,
    pad: 'padW',
    name: 'Food',
    src: food,
  },
  {
    trigger: 'E',
    keycode: 69,
    pad: 'padE',
    name: 'Power-up',
    src: powerUp,
  },
  {
    trigger: 'A',
    keycode: 65,
    pad: 'padA',
    name: 'Player-saved',
    src: playerSaved,
  },
  {
    trigger: 'S',
    keycode: 83,
    pad: 'padS',
    name: 'Level-complete',
    src: levelComplete,
  },
  {
    trigger: 'D',
    keycode: 68,
    pad: 'padD',
    name: 'Extra-life',
    src: extraLife,
  },
  {
    trigger: 'Z',
    keycode: 90,
    pad: 'padZ',
    name: 'Exit-open',
    src: exitOpen,
  },
  {
    trigger: 'X',
    keycode: 88,
    pad: 'padX',
    name: 'Party-power',
    src: partyPower,
  },
  {
    trigger: 'C',
    keycode: 67,
    pad: 'padC',
    name: 'Shield',
    src: shield,
  },
]
