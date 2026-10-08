import { useState } from "react";
import "./Profile.css";

function Profile() {
  const [selectedLevel, setSelectedLevel] = useState("");

  return (
    <div className="profile-page">
      <div className="profile-card">

        <div className="profile-brand">✦ Deriva</div>

        <p className="profile-label">
          PERSONALIZE YOUR LEARNING
        </p>

        <h1>How do you approach problems?</h1>

        <p className="profile-subtitle">
          Choose your current level. Deriva will adapt how it guides you.
        </p>

        <div className="level-options">

          <button
            className={selectedLevel === "Beginner" ? "selected" : ""}
            onClick={() => setSelectedLevel("Beginner")}
          >
            <strong>Beginner</strong>
            <span>I'm still learning the basics.</span>
          </button>

          <button
            className={selectedLevel === "Intermediate" ? "selected" : ""}
            onClick={() => setSelectedLevel("Intermediate")}
          >
            <strong>Intermediate</strong>
            <span>I can solve familiar problems on my own.</span>
          </button>

          <button
            className={selectedLevel === "Expert" ? "selected" : ""}
            onClick={() => setSelectedLevel("Expert")}
          >
            <strong>Expert</strong>
            <span>I'm comfortable solving challenging problems.</span>
          </button>

        </div>

        <button
          className="continue-btn"
          disabled={!selectedLevel}
          onClick={() => {
            localStorage.setItem("deriva_skill_level", selectedLevel);
            window.location.href = "/home";
          }}
        >
          Continue →
        </button>

      </div>
    </div>
  );
}

export default Profile;