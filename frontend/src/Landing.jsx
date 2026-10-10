import "./Landing.css";

function Landing() {
  return (
    <div className="landing-page">
      <nav className="landing-nav">
        <div className="landing-logo">✦ Deriva</div>

        <div className="landing-links">
          <a href="#how">How it works</a>
          <a href="#features">Features</a>
          <a href="/about">About Us</a>
        </div>

        <button
            className="nav-btn"
            onClick={() => (window.location.href = "/setup")}
>
            Get Started →
</button>
      </nav>

      <main className="landing-hero">
        <div className="hero-badge">✦ AI Problem-Solving Tutor</div>

        <h1>
          Don’t just get the solution.
          <br />
          <span>Derive it.</span>
        </h1>

        <p>
          Deriva helps you learn how to think through problems,
          <br />
          instead of simply giving you the answer.
        </p>

        <button
            className="hero-btn"
            onClick={() => (window.location.href = "/setup")}
            >
            Start Deriving →
</button>
      </main>

      <section id="how" className="landing-section">
        <p className="section-label">HOW IT WORKS</p>
        <h2>Think. Question. Derive.</h2>
      </section>

      <section id="features" className="landing-section">
        <p className="section-label">BUILT FOR LEARNING</p>
        <h2>More than an answer.</h2>
      </section>

      <section id="about" className="landing-section">
        <p className="section-label">ABOUT DERIVA</p>
        <h2>Built to make students better problem solvers.</h2>
      </section>
    </div>
  );
}

export default Landing;