import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/threats/stats")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching stats:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!stats) return <p>No data available.</p>;

  return (
    <div>
      <h2>📊 Threat Dashboard</h2>
      <p><strong>Total Threats:</strong> {stats.total}</p>

      <h3>🧩 Threat Categories</h3>
      <ul>
        {stats.categories.map((cat, index) => (
          <li key={index}>{cat._id}: {cat.count}</li>
        ))}
      </ul>

      <h3>🔥 Severity Scores</h3>
      <ul>
        {stats.severity.map((sev, index) => (
          <li key={index}>Score {sev._id}: {sev.count}</li>
        ))}
      </ul>
    </div>
  );
}
