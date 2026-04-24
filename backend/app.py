from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

metrics = {
    "lead_time": 12,
    "cycle_time": 8,
    "deployment_frequency": 2,
    "bug_rate": 15,
    "pr_throughput": 5
}

def analyze(metrics):
    insights = {}

    if metrics["lead_time"] > 10:
        insights["lead_time"] = {
            "status": "High",
            "meaning": "Work is delayed in review phase",
            "suggestion": "Reduce PR size and speed up reviews"
        }

    if metrics["bug_rate"] > 10:
        insights["bug_rate"] = {
            "status": "High",
            "meaning": "Too many bugs in production",
            "suggestion": "Improve testing"
        }

    return insights

@app.route('/metrics')
def get_metrics():
    return jsonify({
        "data": metrics,
        "analysis": analyze(metrics)
    })

if __name__ == '__main__':
    app.run(debug=True)
