import React, { useEffect, useState } from "react";

export default function Threats() {
  const [threats, setThreats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/threats?page=1&limit=10")
      .then((res) => res.json())
      .then((data) => {
        setThreats(data.threats);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching threats:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading threats...</p>;

  return (
    <div>
      <h2>🛡️ Threats List</h2>
      <ul>
        {threats.map((threat, index) => (
          <li key={index}>
            <strong>Category:</strong> {threat["Threat Category"]} <br />
            <strong>Description:</strong> {threat["Cleaned Threat Description"]} <br />
            <strong>Severity:</strong> {threat["Severity Score"]}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
