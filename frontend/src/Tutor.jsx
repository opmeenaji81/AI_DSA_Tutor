import "./Tutor.css";
import { useState } from "react";

function Tutor() {
    const [problem, setProblem] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    

    const sendToTutor = async (studentMessage) => {
  setLoading(true);

  const updatedMessages = [
    ...messages,
    { role: "student", text: studentMessage },
  ];

  setMessages(updatedMessages);

  const conversation = updatedMessages
    .map((message) => `${message.role}: ${message.text}`)
    .join("\n");

  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/tutor/chat?problem=${encodeURIComponent(
        problem
      )}&conversation=${encodeURIComponent(conversation)}`,
      {
        method: "POST",
      }
    );

    const data = await response.json();

    setMessages((prev) => [
      ...prev,
      { role: "ai", text: data.response },
    ]);
  } catch (error) {
  console.error("Tutor error:", error);

  setMessages((prev) => [
    ...prev,
    {
      role: "ai",
      text: `Connection error: ${error.message}`,
    },
  ]);
} finally {
    setLoading(false);
  }
};



  return (
    <div className="tutor-page">
      <header className="tutor-header">
        <button
            className="tutor-logo"
            onClick={() => (window.location.href = "/home")}
  >
    ✦ Deriva
  </button>

  <nav className="tutor-nav">
    <button onClick={() => (window.location.href = "/home")}>
      Dashboard
    </button>

    <button onClick={() => (window.location.href = "/profile")}>
      Profile
    </button>
  </nav>

  <span>AI Problem-Solving Tutor</span>
</header>

      <main className="tutor-workspace">
        <section className="problem-panel">
          <p className="panel-label">PROBLEM</p>

          <h1>Let's solve something.</h1>

          <textarea
            className="problem-input"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            placeholder="Paste your DSA or SQL question here..."
/>
          <div className="upload-box">
            <span>⌁</span>
            <p>Or upload a screenshot</p>
            <small>PNG, JPG up to 5MB</small>
          </div>

          <button
            className="start-btn"
            onClick={() => {
              if (!problem.trim()) return;
            
              setMessages([
                {
                  role: "ai",
                  text: "Let's start by understanding the problem. What do you think the question is asking you to find?",
                },
              ]);
            }}
>
  Start Deriving →
</button>
        </section>

        <section className="tutor-panel">
          <div className="tutor-intro">
            <div className="ai-icon">✦</div>
            <h2>Let's think this through.</h2>
            <p>
              I'll guide your reasoning instead of giving you the answer.
            </p>
          </div>

          <div className="conversation">
            {messages.map((message, index) => (
              <div
                className={
                  message.role === "student"
                    ? "student-message"
                    : "ai-message"
                }
                key={index}
              >
                {message.role === "ai" && <span>✦</span>}
                <p>{message.text}</p>
              </div>
            ))}
</div>
          <div className="chat-input">
            <input
              placeholder={loading ? "Deriva is thinking..." : "Your reasoning..."}
              disabled={loading}
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.target.value.trim() && !loading) {
                  sendToTutor(e.target.value.trim());
                  e.target.value = "";
                }
              }}
            />

            <button
              disabled={loading}
              onClick={(e) => {
                const input = e.currentTarget.previousElementSibling;

                if (input.value.trim() && !loading) {
                  sendToTutor(input.value.trim());
                  input.value = "";
                }
              }}
            >
              {loading ? "..." : "↑"}
            </button>
</div>
        </section>
      </main>
    </div>
  );
}

export default Tutor;