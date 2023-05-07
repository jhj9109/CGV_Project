import playSound from 'play-sound';

const SOUND_FILE_PATH = "../sample.mp3";

export default function soundPlay() {
    const player = playSound({});
    player.play(SOUND_FILE_PATH, function(err: any){
        if (err) throw err
    })
}
