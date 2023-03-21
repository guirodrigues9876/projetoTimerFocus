import {
    buttonPause,
    buttonPlay,
    buttonStop,
    buttonSet,
    buttonSoundOn,
    buttonSoundOff
} from "./elements.js"

export default function events({ controls, timer, sound}) {

    buttonPlay.addEventListener('click', function () {
        controls.play()
        timer.countDown()
        sound.pressButton()
    })

    buttonPause.addEventListener('click', function () {
        controls.pause()
        timer.hold()
        sound.pressButton()
    })

    buttonStop.addEventListener('click', function () {
        controls.reset()
        timer.reset()
        sound.pressButton()

    })

    buttonSoundOn.addEventListener('click', function() {

        buttonSoundOn.classList.add('hide')
        buttonSoundOff.classList.remove('hide')
        // chamando através do elemento
        sound.bgAudio.pause()

    })

    buttonSoundOff.addEventListener('click', function() {

        buttonSoundOn.classList.remove('hide')
        buttonSoundOff.classList.add('hide')
        // chamando através do elemento
        sound.bgAudio.play()
        
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

}