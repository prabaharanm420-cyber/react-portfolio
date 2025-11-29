export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects">

        <article className="project">
          <h3>Portfolio Website</h3>
          <p style={{ color: "var(--muted)" }}>
            Responsive single-file HTML/CSS/JS portfolio.
          </p>
          <div className="tags">
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">JavaScript</span>
          </div>
        </article>

        <article className="project">
          <h3>Todo App</h3>
          <p style={{ color: "var(--muted)" }}>
            A minimal todo app with animations.
          </p>
          <div className="tags">
            <span className="tag">Vanilla JS</span>
            <span className="tag">localStorage</span>
          </div>
        </article>

        <article className="project">
          <h3>Blog (Django)</h3>
          <p style={{ color: "var(--muted)" }}>
            A blog built with Django & Bootstrap.
          </p>
          <div className="tags">
            <span className="tag">Django</span>
            <span className="tag">Python</span>
          </div>
        </article>

        <article className="project">
          <h3>Movie Recommendation System</h3>
          <p style={{ color: "var(--muted)" }}>
            Machine learning based movie suggestions.
          </p>
          <div className="tags">
            <span className="tag">Python</span>
            <span className="tag">ML</span>
          </div>
          <a
            href="https://github.com/prabaharanm420-cyber/movie-recommendation-system"
            target="_blank"
            style={{ color: "var(--accent)", textDecoration: "none" }}
          >
            View on GitHub →
          </a>
        </article>

      </div>
    </section>
  );
}
