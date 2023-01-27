const SOUND_FILE_PATH = "./sample.mp3"

export default function soundPlay() {
    var player = require('play-sound')({})
    player.play(SOUND_FILE_PATH, function(err: any){
        if (err) throw err
    })
}