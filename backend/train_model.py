import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.feature_extraction.text import TfidfVectorizer
import pickle
import os

# Load CSV
df = pd.read_csv("Cybersecurity_Dataset.csv")

# Remove rows with empty descriptions or categories
df = df.dropna(subset=["Cleaned Threat Description", "Threat Category"])

# TF-IDF and Logistic Regression
vectorizer = TfidfVectorizer(stop_words="english", max_features=1000)
X = vectorizer.fit_transform(df["Cleaned Threat Description"])
y = df["Threat Category"]

# Train model
model = LogisticRegression(max_iter=300)
model.fit(X, y)

# Save model
os.makedirs("model", exist_ok=True)
pickle.dump(vectorizer, open("model/tfidf.pkl", "wb"))
pickle.dump(model, open("model/model.pkl", "wb"))

print("✅ Model training complete.")
