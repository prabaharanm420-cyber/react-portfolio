export default function Hero() {
  return (
    <section className="hero">
      <div className="intro">
        <h1>
          Hi, I'm <span style={{ color: "var(--accent)" }}>Prabaharan</span> — I
          build clean, modern websites.
        </h1>
        <p>
          I create responsive web experiences using HTML, CSS, JavaScript and
          frameworks when needed.
        </p>

        <div className="cta">
          <button
            className="btn"
            onClick={() =>
              document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Get in touch
          </button>
          <a
            href="#projects"
            style={{ marginLeft: 10, color: "var(--muted)", textDecoration: "none" }}
          >
            See projects →
          </a>
        </div>
      </div>

      <aside className="card profile">
        <div className="avatar">PR</div>
        <div style={{ fontWeight: 700 }}>Prabaharan</div>
        <div className="meta">
          Frontend • JavaScript • Django • Chennai, India
          <br /> 📞 7339323795 • ✉️ prabaharanm420@gmail.com
        </div>
      </aside>
    </section>
  );
}
