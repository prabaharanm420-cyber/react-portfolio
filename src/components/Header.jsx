export default function Header() {
  return (
    <header>
      <div className="brand">
        <a
          href="https://www.linkedin.com/in/prabaharan-m-26897839a"
          target="_blank"
          className="logo"
        >
          P
        </a>
        <div>
          <div style={{ fontWeight: 700 }}>Prabaharan</div>
          <div style={{ fontSize: 13, color: "var(--muted)" }}>
            Web developer • Frontend & Fullstack
          </div>
        </div>
      </div>

      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <a href="#" onClick={() => alert("Add your resume link here!")}>
          Resume
        </a>
      </nav>
    </header>
  );
}
