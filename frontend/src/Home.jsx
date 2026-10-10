import "./Home.css";

function Home() {
  const profile = JSON.parse(
    localStorage.getItem("deriva_profile") || "null"
);
  if (!profile) {
    window.location.href = "/setup";
    return null;
}
  return (
    <div className="home-page">
      <nav className="home-nav">
        <div className="home-logo">✦ Deriva</div>

        <div className="home-nav-links">
          <a href="/home">Dashboard</a>
          <a href="/tutor">Tutor</a>
          <a href="/profile">Profile</a>
          <a href="/about">About Us</a>
</div>

        
<div className="home-nav-actions">
  <div className="profile-chip">
    <span>●</span>
    {profile.skillLevel}
  </div>

  <button
    className="nav-btn"
    onClick={() => {
      localStorage.removeItem("deriva_profile");
      window.location.href = "/";
    }}
  >
    Log Out
  </button>
</div>

      </nav>

      <main className="home-content">
        <section className="home-hero">
          <p className="home-label">WELCOME BACK</p>

          <h1>
            Think.
            <br />
            <span>Solve.</span>
            <br />
            Derive.
          </h1>

          <p>
            Ready to sharpen your problem-solving skills?
            <br />
            Let's work through something together.
          </p>

          <button
            className="start-solving-btn"
            onClick={() => (window.location.href = "/tutor")}
          >
            Start Solving →
          </button>
        </section>

        <section className="dashboard-card">
          <p className="card-label">YOUR LEARNING</p>

          <div className="learning-row">
            <div>
              <h2>{profile.skillLevel}</h2>
              <p>Current skill level</p>
            </div>

            <div>
              <h2>0</h2>
              <p>Problems derived</p>
            </div>

            <div>
              <h2>0</h2>
              <p>Learning sessions</p>
            </div>
          </div>
        </section>

        <section className="quick-section">
          <p className="card-label">WHAT DO YOU WANT TO SOLVE?</p>

          <div className="domain-grid">
            <button onClick={() => (window.location.href = "/tutor")}>
              <span>⌘</span>
              <strong>DSA</strong>
              <small>Algorithms & Data Structures</small>
            </button>

            <button onClick={() => (window.location.href = "/tutor")}>
              <span>◇</span>
              <strong>SQL</strong>
              <small>Queries & Database Problems</small>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;