# Drum machine (dev server version)

A React-based app for the [Build a Drum Machine](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-drum-machine) freeCodeCamp project. I setup this version using create-react-app.

You can [see the app in action](https://merc-drum-machine.netlify.app/) here. There's also a [less up-to-date version on codepen](https://codepen.io/cakeisaliegaming/full/oNzNerZ).

## Pad animations

Creating simple animations in css is relatively straight-foward. And we can trigger these animations by adding a class to the element. However, we then need to remove this class once the animation is finished so that it can play again if the same key/button is pressed.

A simple way to remove the class is: `document.getElementById(event.target.id).classList.remove('pad-anim')`

However, you need to wait for the animation to finish first before removing!

Some solutions that worked:

- using the setTimeout() so that the class is removed after a set period
- using another DOM event listener, eg `document.addEventListener('animationend', event => document.getElementById(event.target.id).classList.remove('pad-anim') )`
- using the React `onAnimationEnd={}` attribute, which works in a similar fashion to the above example and creates an event object that can be passed into a function

For some reason I can't figure yet, in iOS browsers the scale anim works but the border anim doesn't! I don't know if this is the same for Mac OS as I only have a Windows PC, Android phone and iPad for testing.
