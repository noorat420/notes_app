"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify({ title, content }),
    });

    router.push("/notes");
  };

  return (
    <div className="site-shell">
      {/* Header (same as home, clean) */}
      <header className="site-header">
        <div className="brand">Scribbly</div>
        <nav>
          <a href="/notes" className="btn btn-outline-secondary me-2">
            All Notes
          </a>
          <a href="/" className="btn btn-sm btn-light">
            Home
          </a>
        </nav>
      </header>

      {/* Single-page content */}
      <section className="add-note-page">
        <div className="add-note-inner">
          <div className="illustration">
            <svg
              width="300"
              height="240"
              viewBox="0 0 260 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="8"
                y="8"
                width="244"
                height="204"
                rx="14"
                fill="#fff"
                stroke="#f0e6df"
              />
              <path
                d="M40 70c18-24 70-24 88 0"
                stroke="#ff7a00"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <circle cx="168" cy="70" r="24" fill="#ff7a00" />
              <path
                d="M60 140h120"
                stroke="#f0c8b0"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="add-note-form">
            <h1>
              <span style={{ color: "var(--orange)" }}>New</span> Note
            </h1>
            <p className="subtitle">
              Write freely. Your thoughts matter ✨
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  className="form-control"
                  placeholder="Note title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Content</label>
                <textarea
                  className="form-control content-textarea"
                  placeholder="Start writing here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>

              <div className="form-actions">
                <button className="btn-cta">💾 Save Note</button>
                <a href="/notes" className="btn btn-light">
                  Cancel
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
