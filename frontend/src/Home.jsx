import "./Home.css";

function Home() {
  const skillLevel = localStorage.getItem("deriva_skill_level");
  if (!skillLevel) {
    window.location.href = "/profile";
    return null;
}
  return (
    <div className="home-page">
      <nav className="home-nav">
        <div className="home-logo">✦ Deriva</div>

        <div className="home-nav-links">
          <a href="/home">Dashboard</a>
          <a href="/tutor">Tutor</a>
          <a href="#about">About</a>
        </div>

        <div className="profile-chip">
          <span>●</span>
          {skillLevel}
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
              <h2>{skillLevel}</h2>
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