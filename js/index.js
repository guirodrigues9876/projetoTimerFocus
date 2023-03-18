//default import
//nesse caso posso nomear da forma que quiser
import Controls from "./controls.js"
import Timer from "./timer.js"
import { buttonPause,
        buttonPlay,
        buttonSet,
        buttonSoundOff,
        buttonSoundOn,
        buttonStop,
        minutesDisplay,
        secondsDisplay
    } from "./config.js"


//named import
// aqui tem que ser o nome exato
// import Timer from "./timer.js"

// let minutes = Number(minutesDisplay.textContent)

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})

//Event-driven
// programação imperativa
// callback

buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.countDown()
})

buttonPause.addEventListener('click', function () {
    controls.pause()
    timer.hold()
})

buttonStop.addEventListener('click', function () {
    controls.reset()
    timer.reset()

})

buttonSoundOn.addEventListener('click', function() {

    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    
})

buttonSoundOff.addEventListener('click', function() {

    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
    
})

buttonSet.addEventListener('click', function() {
   let newMinutes = controls.getMinutes()

   if (!newMinutes) {
       timer.reset()
       return
   }

   timer.updateDisplay(newMinutes, 0)
   timer.updateMinutes(newMinutes)
})