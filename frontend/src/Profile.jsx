import { useState, useEffect } from "react";
import "./Profile.css";

function Profile({ setup = false }) {
  const existingProfile = JSON.parse(
    localStorage.getItem("deriva_profile") || "null"
  );

  const [name, setName] = useState(existingProfile?.name || "");
  const [selectedLevel, setSelectedLevel] = useState(
    existingProfile?.skillLevel || ""
  );

  useEffect(() => {
    if (setup && existingProfile) {
      window.location.href = "/home";
    }

    if (!setup && !existingProfile) {
      window.location.href = "/setup";
    }
  }, [setup]);

  const saveProfile = () => {
    if (!name.trim() || !selectedLevel) return;

    localStorage.setItem(
      "deriva_profile",
      JSON.stringify({
        name: name.trim(),
        skillLevel: selectedLevel,
      })
    );

    window.location.href = "/home";
  };

  return (
    <div className="profile-page">
      <div className="profile-card">

        <button
          className="profile-brand"
          onClick={() => (window.location.href = "/home")}
>
  ✦ Deriva
</button>

        <p className="profile-label">
          {setup ? "CREATE YOUR PROFILE" : "ACCOUNT SETTINGS"}
        </p>

        <h1>
          {setup ? "Let's build your profile." : "Your profile."}
        </h1>

        <p className="profile-subtitle">
          {setup
            ? "Tell Deriva a little about yourself so your learning experience can adapt to you."
    : "Update your name or learning level whenever you want."}
        </p>

        <div className="profile-field">
          <label>YOUR NAME</label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

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
          disabled={!name.trim() || !selectedLevel}
          onClick={saveProfile}
        >
          {setup ? "Create Profile →" : "Save Changes →"}
        </button>

        {!setup && (
          <button
            className="back-btn"
            onClick={() => (window.location.href = "/home")}
          >
            ← Back to Dashboard
          </button>
        )}

      </div>
    </div>
  );
}

export default Profile;