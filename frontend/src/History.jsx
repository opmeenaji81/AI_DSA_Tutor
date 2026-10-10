
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./History.css";

function History() {
  const [sessions, setSessions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("deriva_sessions") || "[]"
    );

    setSessions(saved);
  }, []);

  return (
    <div className="history-page">
      <header>
        <button onClick={() => navigate("/tutor")}>
          ← Back to Tutor
        </button>
        <h1>Conversation History</h1>
        <p>Revisit your problem-solving journey.</p>
      </header>

      {sessions.length === 0 ? (
        <p>No saved conversations yet. Start solving a problem!</p>
      ) : (
        <div className="history-list">
          {sessions.map((session) => (
            <article key={session.id} className="history-card">
              <h3>
                {session.problem.trim() || "Screenshot problem"}
              </h3>

              <p>
                {session.messages.length} messages
              </p>

              <small>
                {new Date(session.updatedAt).toLocaleString()}
              </small>

              <button
                onClick={() =>
                  navigate("/tutor", {
                    state: { sessionId: session.id },
                  })
                }
              >
                Open Conversation →
              </button>
              
<button
  className="delete-session-btn"
  onClick={() => {
    const confirmed = window.confirm(
      "Delete this conversation permanently?"
    );

    if (!confirmed) return;

    const updatedSessions = sessions.filter(
      (item) => item.id !== session.id
    );

    localStorage.setItem(
      "deriva_sessions",
      JSON.stringify(updatedSessions)
    );

    setSessions(updatedSessions);
  }}
>
  Delete Conversation
</button>

            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default History;
