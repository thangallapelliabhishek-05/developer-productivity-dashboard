import React, { useEffect, useState } from "react";
import MetricCard from "./components/MetricCard";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/metrics")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  if (!data) return <h2>Loading...</h2>;

  const chartData = Object.keys(data.data).map(key => ({
    name: key,
    value: data.data[key]
  }));

  return (
    <div style={{ padding: 20 }}>
      <h1>Developer Productivity Dashboard</h1>

      <BarChart width={600} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" />
      </BarChart>

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
