import "./EditProfile.css";

function EditProfile() {
  const profile = JSON.parse(
    localStorage.getItem("deriva_profile") || "null"
  );

  if (!profile) {
    window.location.href = "/setup";
    return null;
  }

  return (
    <div className="edit-profile-page">
      <nav className="edit-profile-nav">
        <button onClick={() => (window.location.href = "/home")}>
          ✦ Deriva
        </button>

        <button onClick={() => (window.location.href = "/home")}>
          ← Dashboard
        </button>
      </nav>

      <main className="edit-profile-content">
        <p className="edit-label">ACCOUNT</p>

        <h1>Your Profile</h1>

        <div className="profile-overview">
          <div className="profile-avatar">
            {profile.name.charAt(0).toUpperCase()}
          </div>

          <div>
            <h2>{profile.name}</h2>
            <p>{profile.skillLevel} learner</p>
          </div>
        </div>

        <div className="profile-info">
          <div>
            <span>NAME</span>
            <strong>{profile.name}</strong>
          </div>

          <div>
            <span>SKILL LEVEL</span>
            <strong>{profile.skillLevel}</strong>
          </div>
        </div>

        <button
          className="edit-btn"
          onClick={() => (window.location.href = "/edit-profile")}
        >
          Edit Profile →
        </button>
      </main>
    </div>
  );
}

export default EditProfile;