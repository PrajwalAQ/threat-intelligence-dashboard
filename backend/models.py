from pymongo import MongoClient

# Use "localhost" if running MongoDB locally
# Use "mongo" if using Docker service name
client = MongoClient("mongodb://localhost:27017/")
db = client["threat_db"]
collection = db["threats"]
