def get_config_for_smtp():
    import json

    config = dict()

    file_path = "private/google.json"

    with open(file_path, "r") as json_file:

        json_data = json.load(json_file)
        google_user = json_data["google"]
        config["id"] = google_user["id"]
        config["pwd"] = google_user["pwd"]
        
    config["sender_email"] = f"{google_user['id']}@gmail.com"
    return config
