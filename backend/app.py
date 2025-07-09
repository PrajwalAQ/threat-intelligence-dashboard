from flask import Flask, request, jsonify
from flask_cors import CORS
from models import collection

app = Flask(__name__)
CORS(app)

@app.route("/api/threats", methods=["GET"])
def get_threats():
    page = int(request.args.get("page", 1))
    limit = int(request.args.get("limit", 10))
    category = request.args.get("category")
    search = request.args.get("search")
    
    query = {}
    if category:
        query["Threat Category"] = category
    if search:
        query["Cleaned Threat Description"] = {"$regex": search, "$options": "i"}

    total = collection.count_documents(query)
    threats = list(collection.find(query).skip((page - 1) * limit).limit(limit))
    
    for threat in threats:
        threat["_id"] = str(threat["_id"])
    return jsonify({"total": total, "threats": threats})

@app.route("/api/threats/<string:threat_id>", methods=["GET"])
def get_threat(threat_id):
    threat = collection.find_one({"_id": threat_id})
    if not threat:
        return jsonify({"error": "Not found"}), 404
    threat["_id"] = str(threat["_id"])
    return jsonify(threat)

@app.route("/api/threats/stats", methods=["GET"])
def get_stats():
    total = collection.count_documents({})
    categories = collection.aggregate([
        {"$group": {"_id": "$Threat Category", "count": {"$sum": 1}}}
    ])
    severity = collection.aggregate([
        {"$group": {"_id": "$Severity Score", "count": {"$sum": 1}}}
    ])
    return jsonify({
        "total": total,
        "categories": list(categories),
        "severity": list(severity)
    })

if __name__ == "__main__":
    app.run(debug=True)
