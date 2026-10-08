import "./About.css";

const teamMembers = [
  {
    name: "Omprakash",
    initial: "Om",
    github: "https://github.com/opmeenaji81",
    linkedin: "https://www.linkedin.com/in/opmeenaji",
    instagram: "https://instagram.com/omxprakashh",
  },
  {
    name: "Sarthak Kabra",
    initial: "SK",
    github: "https://github.com/YOUR_SARTHAK_GITHUB",
    linkedin: "https://www.linkedin.com/in/sarthak-kabra-8a7875281/",
    instagram: "https://instagram.com/sarthak_kabra_",
  },
  {
    name: "Janhavi Gupta",
    initial: "JG",
    github: "https://github.com/opmeenaji81",
    linkedin: "https://linkedin.com/in/opmeenaji",
    instagram: "https://instagram.com/janha.vi06/",
  },
];

function SocialIcons({ member }) {
  return (
    <div className="social-links">
      <a
        href={member.github}
        target="_blank"
        rel="noreferrer"
        aria-label={`${member.name} GitHub`}
      >
        <svg viewBox="0 0 24 24">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.1c-3.2.7-3.88-1.36-3.88-1.36-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
        </svg>
      </a>

      <a
        href={member.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label={`${member.name} LinkedIn`}
      >
        <svg viewBox="0 0 24 24">
          <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45h3.56V8.99H3.54v11.46ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44C23.2 24 24 23.2 24 22.22V1.78C24 .8 23.2 0 22.22 0Z" />
        </svg>
      </a>

      <a
        href={member.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label={`${member.name} Instagram`}
      >
        <svg viewBox="0 0 24 24">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5ZM17.5 6.5a1 1 0 1 1-1 1 1 1 0 0 1-1-1Z" />
        </svg>
      </a>
    </div>
  );
}

function About() {
  return (
    <div className="about-page">

      <nav className="about-nav">
        <button
          className="about-logo"
          onClick={() => (window.location.href = "/home")}
        >
          ✦ Deriva
        </button>

        <button
          className="dashboard-link"
          onClick={() => (window.location.href = "/home")}
        >
          ← Dashboard
        </button>
      </nav>

      <main className="about-content">

        <section className="about-hero">
          <p className="about-label">ABOUT DERIVA</p>

          <h1>
            Learn to solve.
            <br />
            <span>Not just to answer.</span>
          </h1>

          <p className="about-description">
            Deriva is an AI-powered problem-solving tutor designed to
            help students develop the reasoning behind a solution
            instead of simply receiving the answer.
          </p>
        </section>

        <section className="about-story">
          <p className="about-label">OUR PHILOSOPHY</p>

          <h2>Don't just get the solution. Derive it.</h2>

          <p>
            We believe students learn more when they discover the path
            to a solution themselves. Deriva asks the right questions,
            provides small hints when needed, and adapts its guidance
            to the learner.
          </p>
        </section>

        <section className="team-section">
          <p className="about-label">THE TEAM</p>

          <h2>Built by students, for students.</h2>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <div className="team-card" key={member.name}>
                <div className="team-avatar">
                  {member.initial}
                </div>

                <h3>{member.name}</h3>

                <p>Developer</p>

                <SocialIcons member={member} />
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer className="about-footer">
        <div>
          <strong>✦ Deriva</strong>
          <p>Don't just get the solution. Derive it.</p>
        </div>

        <p>© 2026 Deriva. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default About;