import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message sent — thanks! (demo)");

    setTimeout(() => setStatus(""), 2500);
  };

  return (
    <section id="contact" className="card">
      <h2>Contact</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input placeholder="Your name" required />
        <input type="email" placeholder="Your email" required />
        <textarea rows="5" placeholder="Message" required />

        <div style={{ fontSize: 14, color: "var(--muted)", marginTop: 6 }}>
          📞 7339323795<br />
          ✉️ prabaharanm420@gmail.com<br />
          🔗{" "}
          <a
            href="https://www.linkedin.com/in/prabaharan-m-26897839a"
            target="_blank"
            style={{ color: "var(--accent)" }}
          >
            LinkedIn Profile
          </a>
          <br />
          🔗{" "}
          <a
            href="https://github.com/prabaharanm420-cyber/movie-recommendation-system"
            target="_blank"
            style={{ color: "var(--accent)" }}
          >
            GitHub Repo
          </a>
        </div>

        <button className="btn" type="submit">
          Send message
        </button>

        <div style={{ color: "lightgreen", marginTop: 10 }}>{status}</div>
      </form>
    </section>
  );
}
