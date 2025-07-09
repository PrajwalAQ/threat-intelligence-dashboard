import React, { useState } from "react";

export default function Analyze() {
  const [description, setDescription] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = () => {
    setLoading(true);
    fetch("http://localhost:5001/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description }),
    })
      .then((res) => res.json())
      .then((data) => {
        setPrediction(data.predicted_category);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Prediction error:", err);
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>🧠 Analyze New Threat</h2>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter threat description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button onClick={handleAnalyze} disabled={loading || !description}>
        {loading ? "Analyzing..." : "Predict Category"}
      </button>

      {prediction && (
        <div style={{ marginTop: "20px" }}>
          <h3>🟢 Predicted Category: <u>{prediction}</u></h3>
        </div>
      )}
    </div>
  );
}
