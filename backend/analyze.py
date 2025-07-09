import pickle
from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route("/api/analyze", methods=["POST"])
def analyze():
    data = request.get_json()
    description = data.get("description")

    vectorizer_path = os.path.join("model", "tfidf.pkl")
    model_path = os.path.join("model", "model.pkl")

    with open(vectorizer_path, "rb") as f:
        vectorizer = pickle.load(f)
    with open(model_path, "rb") as f:
        model = pickle.load(f)

    X = vectorizer.transform([description])
    prediction = model.predict(X)[0]

    return jsonify({"predicted_category": prediction})

if __name__ == "__main__":
    app.run(port=5001)
