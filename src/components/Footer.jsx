export default function Footer() {
  return (
    <footer>
      <div>Made with ❤️ by Prabaharan</div>
      <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 6 }}>
        © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
