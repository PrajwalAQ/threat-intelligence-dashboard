import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Threats from "./Threats";
import Analyze from "./Analyze";

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">Dashboard</Link> |{" "}
        <Link to="/threats">Threats</Link> |{" "}
        <Link to="/analyze">Analyze</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/threats" element={<Threats />} />
        <Route path="/analyze" element={<Analyze />} />
      </Routes>
    </Router>
  );
}

export default App;
