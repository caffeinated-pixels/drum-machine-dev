# Drum machine (dev server)

A React-based app for the [Build a Drum Machine](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-drum-machine) freeCodeCamp project.

## Pad animations

Creating simple animations in css is relatively straight-foward. And we can trigger these animations by adding a class to the element. However, we then need to remove this class once the animation is finished so that it can play again if the same key/button is pressed.

A simple way to remove the class is: `document.getElementById(event.target.id).classList.remove('pad-anim')`

However, you need to wait for the animation to finish first before removing!

Some solutions that worked:

- using the setTimeout() so that the class is removed after a set period
- using another DOM event listener, eg `document.addEventListener('animationend', event => document.getElementById(event.target.id).classList.remove('pad-anim') )`
- using the React `onAnimationEnd={}` attribute, which works in a similar fashion to the above example and creates an event object that can be passed into a function

### What to use

- React
- Sass

### To-do list

- make it look nice!
- responsive layout
- use global state through Redux or Context API???
- convert to hooks (setState, etc)
- add footer
- tidy up code!!!

### Styling to-do list

- left-panel buttons
- rainbow color progression on pads
- textured background
- border glow or color change on drumpad click/keypress
- 80s laser grid background???

### Possible drum sounds

- kick/bass drum
- snare
- toms (small, medium, floor)
- hi-hat
- cymbols (crash, ride)
- clave
- cow bell
- hand clap
