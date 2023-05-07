import winsound

def hello_peter():
    # winsound.SND_FILENAME : wav확장자 의미. 동기적 실행
    winsound.PlaySound("../hello_peter.wav", winsound.SND_FILENAME)
