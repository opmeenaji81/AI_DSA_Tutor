import { useState } from "react";
import "./App.css";

function App() {
const [userAnswer, setUserAnswer] = useState("");
const [hint, setHint] = useState("");
const [loading, setLoading] = useState(false);
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">
          <span>⌘</span> AI DSA Tutor
        </div>

        <div className="nav-right">
          <span className="streak">🔥 0 day streak</span>
          <div className="avatar">S</div>
        </div>
      </header>

      <main className="dashboard">
        <section className="hero">
          <div>
            <p className="eyebrow">YOUR DSA LEARNING SPACE</p>
            <h1>Think. Solve. <span>Learn.</span></h1>
            <p className="subtitle">
              Don't just get the answer. Build the thinking skills to solve
              DSA problems yourself.
            </p>
          </div>
        </section>

        <section className="workspace">
          <div className="problem-card">
            <div className="card-header">
              <span className="badge">ARRAYS</span>
              <span className="difficulty">Easy</span>
            </div>

            <h2>Find the Maximum Element</h2>

            <p className="problem-text">
              Given an array of integers, find and return the maximum element
              in the array.
            </p>

            <div className="example">
              <strong>Example</strong>
              <code>[3, 7, 2, 9, 4]</code>
              <span>Output: 9</span>
            </div>
          </div>

          <div className="answer-card">
            <div className="card-header">
              <h3>Your Approach</h3>
              <span className="thinking">● Thinking</span>
            </div>

            <textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Explain how you would approach this problem..."
            />

            <button
                className="hint-btn"
                onClick={async () => {
                  setLoading(true);
                  setHint("");
                
                  try {
                    const response = await fetch(
                      `http://127.0.0.1:8000/api/tutor/hint?problem=${encodeURIComponent(
                        "Find the maximum element in an array."
                      )}&user_answer=${encodeURIComponent(userAnswer)}`,
                      {
                        method: "POST",
                      }
                    );
                  
                    const data = await response.json();
                    setHint(data.hint);
                  } catch (error) {
                    setHint("Something went wrong. Please try again.");
                  } finally {
                    setLoading(false);
                  }
             }}
            >
              {loading ? "Thinking..." : "✦ Get AI Hint"}
            </button>

            {hint && (
              <div className="hint-box">
                <span>💡</span>
                <p>
                  {hint}
                </p>
            </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;