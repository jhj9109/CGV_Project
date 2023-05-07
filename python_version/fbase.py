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


def update_db(db, context):
    # 3. 데이터 추가(수정)
    movie_name = context["movie_name"]
    screen_type = context["screen_type"]
    yyyymmddhhmm = context["yyyymmddhhmm"]
    screen_data = context["screen_data"]

    path = ["movies", movie_name, "screen_types", screen_type]
    target_screen_type_ref = get_db_ref(db, path)
    target_screen_type_ref.update({yyyymmddhhmm: screen_data})


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
