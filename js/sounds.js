export default function(){
   
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

    bgAudio.loop = true

    function pressButton(){
        buttonPressAudio.play()
    }

    function timeEnd(){
        kitchenTimer.play()
    }

    function bgAudioStart(){
        bgAudio.play()
    }

    // retornando funções no pressButton e no TimeEnd, e retornando elemento no bgAudio. Duas formas de retornar.
    return {
        pressButton,
        timeEnd,
        bgAudio
    }
}