import React from "react";

function MetricCard({ name, value, analysis }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      margin: "10px",
      borderRadius: "10px"
    }}>
      <h3>{name}</h3>
      <p><b>Value:</b> {value}</p>

      {analysis && (
        <>
          <p><b>Status:</b> {analysis.status}</p>
          <p><b>Meaning:</b> {analysis.meaning}</p>
          <p><b>Suggestion:</b> {analysis.suggestion}</p>
        </>
      )}
    </div>
  );
}

export default MetricCard;
