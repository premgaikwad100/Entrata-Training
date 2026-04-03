from flask import Flask, request, jsonify
import firebase_admin
from firebase_admin import credentials, auth
from google.cloud import datastore
import os

app = Flask(__name__)

# Firebase Admin Initialization
cred = credentials.Certificate("service-account.json")
firebase_admin.initialize_app(cred)

# Google Cloud Datastore Setup
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "service-account.json"
datastore_client = datastore.Client()

# Register User Data in Datastore
@app.route("/store_user_data", methods=["POST"])
def store_user_data():
    data = request.json
    uid = data["uid"]
    name = data["name"]
    email = data["email"]

    key = datastore_client.key("User", uid)
    entity = datastore.Entity(key)
    entity.update({"name": name, "email": email})
    datastore_client.put(entity)

    return jsonify({"msg": "User data stored successfully!"})


# Basic Endpoint to Verify API is Working
@app.route("/", methods=["GET"])
def home():
    return jsonify({"msg": "API is running successfully!"})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
