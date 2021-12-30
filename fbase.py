import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


def get_db():
    # 1. 인증
    # 다운로드 받은 json 경로/파일명 입력
    key_file_name = "./private/cgv-movie-check-firebase-adminsdk-w1s3g-b9ee2e859b.json"
    cred = credentials.Certificate(key_file_name)
    firebase_admin.initialize_app(cred)

    # 2. DB
    db = firestore.client()
    return db


def update_db(db, data):
    # 3. 데이터 추가(수정)
    movie_name = data["movie_name"]
    screen_type = data["screen_type"]
    date = data["date"]
    start_time = data["start_time"]
    remain = data["remain"]

    movies_ref = db.collection("movies")  # movies
    movie_ref = movies_ref.document(movie_name)  # movies > spider_man
    screen_types_ref = movie_ref.collection(
        "screen_types")  # ... > spider_man > screen_types
    target_screen_type_ref = screen_types_ref.document(
        screen_type)  # ... > screen_types > imax_laser_2d
    # ... imax_laser_2d > key: yyyymmddhhmm, value: remain(number or string)
    target_screen_type_ref.update({f"{date}{start_time}": remain})


def read_db(db, movie_name="", screen_type=""):
    # 4. 데이터 읽기
    if movie_name:
        doc_ref = db.collection("movies").document(
            movie_name).collection("screen_types").document(screen_type)
        doc = doc_ref.get()
        if doc.exists:
            return doc.to_dict()
        else:
            return None
    else:
        collection = db.collection("movies")
        docs = collection.stream()
        return {doc.id: doc.to_dict() for doc in docs}


def get_users(db):

    collection = db.collection("users")
    docs = collection.stream()
    return {doc.id: doc.to_dict() for doc in docs}


def get_db_ref(db, path):
    db_ref = db
    for i, name in enumerate(path):
        if i % 2 == 0:
            db_ref = db_ref.collection(name)
        else:
            db_ref = db_ref.document(name)
    return db_ref
