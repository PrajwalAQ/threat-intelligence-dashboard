# 🛡️ Threat Intelligence Dashboard

A full-stack web application that allows browsing, searching, and analyzing cyber threat reports, powered by a machine learning model for real-time threat classification.

---

## 📌 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Analyze with Machine Learning](#analyze-with-machine-learning)
- [Advanced Features](#advanced-features)
- [Troubleshooting](#troubleshooting)

---

## 🧠 Overview

Threat analysts often receive reports in raw text format. This dashboard helps:
- Browse threat data
- Search/filter based on category or description
- View key statistics
- Predict the threat category of a new report using ML

---

## 🚀 Tech Stack

| Layer      | Technology            |
|------------|------------------------|
| Frontend   | React.js               |
| Backend    | Flask (Python)         |
| Database   | MongoDB                |
| ML Model   | Scikit-learn (TF-IDF + Logistic Regression) |
| DevOps     | Docker (optional), Postman, curl |
| Dataset    | [Kaggle Cyber Threats](https://www.kaggle.com/datasets/hussainsheikh03/nlp-based-cyber-security-dataset)

---

## ✨ Features

- ✅ View threats in a clean UI
- 🔎 Search + filter threats
- 📊 View statistics per category/severity
- 🧠 Predict new threats with ML
- 💾 Store and analyze real-world data
- 📦 Easily deployable with Docker

---

## ⚙️ Setup Instructions

### 1️⃣ Backend Setup (Flask)

#bash
# Navigate to backend directory
cd backend

# Create and activate virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies

pip install -r requirements.txt

👉 Start MongoDB:


brew services start mongodb-community@6.0
👉 Ingest Data:
Ensure Cybersecurity_Dataset.csv is in backend/
python ingest.py
👉 Train the ML Model:

python train_model.py
This will generate:

model/tfidf.pkl

model/model.pkl

👉 Start Flask API:

python app.py  # Starts backend at http://localhost:5000
👉 (Optional) Start ML Analyze API (separate):

python analyze.py  # Runs at http://localhost:5001
2️⃣ Frontend Setup (React)

cd frontend
npm install
npm start
Runs at:
http://localhost:3000

🔌 API Endpoints
📄 /api/threats
List threats with pagination, search, and filter


GET /api/threats?page=1&limit=10&category=Phishing&search=payload
🔍 /api/threats/:id
Get a specific threat by _id

📊 /api/threats/stats
Returns:
# 🛡️ Threat Intelligence Dashboard

A full-stack web application that allows browsing, searching, and analyzing cyber threat reports, powered by a machine learning model for real-time threat classification.

---

## 📌 Table of Contents

- [🧠 Overview](#🧠-overview)
- [🚀 Tech Stack](#🚀-tech-stack)
- [✨ Features](#✨-features)
- [⚙️ Setup Instructions](#⚙️-setup-instructions)
  - [1️⃣ Backend Setup (Flask)](#1️⃣-backend-setup-flask)
  - [2️⃣ Frontend Setup (React)](#2️⃣-frontend-setup-react)
- [🔌 API Endpoints](#🔌-api-endpoints)
- [🤖 Analyze with Machine Learning](#🤖-analyze-with-machine-learning)
- [⚡ Advanced Features](#⚡-advanced-features)
- [🧯 Troubleshooting](#🧯-troubleshooting)
- [👨‍💻 Author](#👨‍💻-author)
- [📬 Contact](#📬-contact)

---

## 🧠 Overview

Threat analysts often receive reports in raw text format. This dashboard helps:
- Browse threat data
- Search/filter based on category or description
- View key statistics
- Predict the threat category of a new report using ML

---

## 🚀 Tech Stack

| Layer      | Technology                                   |
|------------|-----------------------------------------------|
| Frontend   | React.js                                      |
| Backend    | Flask (Python)                                |
| Database   | MongoDB                                       |
| ML Model   | Scikit-learn (TF-IDF + Logistic Regression)   |
| DevOps     | Docker (optional), Postman, curl              |
| Dataset    | [Kaggle Cyber Threats](https://www.kaggle.com/datasets/hussainsheikh03/nlp-based-cyber-security-dataset)

---

## ✨ Features

- ✅ View threats in a clean UI
- 🔎 Search + filter threats
- 📊 View statistics per category/severity
- 🧠 Predict new threats with ML
- 💾 Store and analyze real-world data
- 📦 Easily deployable with Docker

---

## ⚙️ Setup Instructions

### 1️⃣ Backend Setup (Flask)


#### Navigate to backend directory
cd backend

#### Create and activate virtual environment
python3 -m venv venv
source venv/bin/activate

#### Install dependencies
pip install -r requirements.txt


#### 👉 Start MongoDB (macOS):

brew services start mongodb-community@6.0


#### 👉 Ingest Data
Ensure Cybersecurity_Dataset.csv is in the backend/ folder.

python ingest.py


#### 👉 Train the ML Model

python train_model.py
This will generate:

model/tfidf.pkl

model/model.pkl


#### 👉 Start Flask API


python app.py  # Starts backend at http://localhost:5000
#### 👉 (Optional) Start ML Analyze API

python analyze.py  # Starts on http://localhost:5001
### 2️⃣ Frontend Setup (React)

cd frontend
npm install
npm start
Runs at:
#### 👉 http://localhost:3000

#### 🔌 API Endpoints
📄 GET /api/threats
Returns a paginated list of threats
Supports:

page: page number

limit: items per page

category: filter by threat category

search: keyword search in description

Example:

GET /api/threats?page=1&limit=10&category=Phishing&search=payload
#### 🔍 GET /api/threats/:id
Fetch details for a specific threat by its unique _id.

Example:

GET /api/threats/15
Response:

{
  "_id": "15",
  "Threat Category": "Phishing",
  "Severity Score": "4",
  "Cleaned Threat Description": "phishing email with malicious payload"
}
📊 GET /api/threats/stats
Returns:


{
  "total": 1100,
  "categories": [
    { "_id": "Phishing", "count": 120 },
    { "_id": "DDoS", "count": 95 }
  ],
  "severity": [
    { "_id": "3", "count": 210 },
    { "_id": "5", "count": 55 }
  ]
}

### 🤖 Analyze with Machine Learning
#### 🔗 API

POST /api/analyze
Content-Type: application/json
Request Body:

{
  "description": "phishing via fake login portal"
}
Response:

{
  "predicted_category": "Phishing"
}
🧪 Analyze Page in Frontend
Visit:

http://localhost:3000/analyze
Paste a threat description

Click Predict Category

Get the result from your ML model

⚡ Advanced Features
🔐 JWT-based authentication (optional)

🧪 Unit tests with pytest or unittest

🐳 Docker support with Dockerfile and docker-compose.yml

📡 WebSockets for real-time threat logs (future-ready)

🧯 Troubleshooting
Issue	Fix
FileNotFoundError	Make sure your CSV file exists in backend/
KeyError: 'ID'	Use Cleaned Threat Description or index as Mongo _id
CORS error in frontend	Add CORS(app) and install flask-cors
Wrong ML predictions	Re-run train_model.py, verify data is cleaned
MongoDB not connecting	Start with brew services start mongodb-community@6.0
/api/analyze not working	Ensure analyze.py is running and model files exist

## How To Run

 STEP 1: Initialize Mongo DB
 brew services start mongodb-community@6.0
 
 STEP 2: Start Backend
 route to backend location
 source venv/bin/activate
 python app.py
 
 STEP 3: Start Frontenf
 route to frontend
 npm install 
 npm start

 
### 👨‍💻 Author
Prajwal Quadras
Full Stack Developer | Cybersecurity Enthusiast
