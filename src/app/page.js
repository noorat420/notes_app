"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="brand">Scribbly<span style={{color:'var(--orange)'}}></span></div>
        <nav>
          <Link href="/notes" className="btn btn-outline-secondary me-2">Try for Free</Link>
          <Link href="#" className="btn btn-sm btn-light">Log in</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 hero-left">
              <h1><span style={{color:'var(--orange)'}}>Note</span> taking,<br/>made simple</h1>
              <p className="lead">Passionately made by student and for student. Noted, the all in one note taking app.</p>
              <div className="mt-4">
                <Link href="/notes" className="text-decoration-none">
                  <button className="btn-cta">Try for Free</button>
                </Link>
              </div>
            </div>

            <div className="col-md-6 illustration">
              <svg width="320" height="240" viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="280" height="200" rx="18" fill="#fff"/>
                <path d="M60 90c20-28 80-28 100 0" stroke="#ff7a00" strokeWidth="6" strokeLinecap="round"/>
                <circle cx="200" cy="80" r="28" fill="#ff7a00"/>
                <path d="M160 140h80" stroke="#f0c8b0" strokeWidth="8" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-cards">
        <div className="note-card">
          <h5>Write Notes</h5>
          <p className="mb-0 text-muted">Write any notes you want</p>
        </div>
        <div className="note-card">
          <h5>Plan your day</h5>
          <p className="mb-0 text-muted">Make sure your day is well planned</p>
        </div>
        <div className="note-card">
          <h5>Learn facts</h5>
          <p className="mb-0 text-muted">Keep your mind sharp</p>
        </div>
      </section>
    </div>
  );
}
