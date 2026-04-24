import React, { useEffect, useState } from "react";
import MetricCard from "./components/MetricCard";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/metrics")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  if (!data) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Developer Productivity Dashboard</h1>

      {Object.keys(data.data).map(key => (
        <MetricCard
          key={key}
          name={key}
          value={data.data[key]}
          analysis={data.analysis[key]}
        />
      ))}
    </div>
  );
}

export default App;
