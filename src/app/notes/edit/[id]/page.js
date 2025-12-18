"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditNote() {
  const { id } = useParams();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Load existing note
  useEffect(() => {
    fetch("/api/notes")
      .then((res) => res.json())
      .then((data) => {
        const note = data.find((n) => n.id === id);
        if (note) {
          setTitle(note.title);
          setContent(note.content);
        }
      });
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    await fetch("/api/notes", {
      method: "PUT",
      body: JSON.stringify({ id, title, content }),
    });

    router.push("/notes");
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="brand">Scribbly</div>
      </header>

      <section className="add-note-page">
        <div className="add-note-inner">
          <div className="add-note-form">
            <h1>Edit Note</h1>

            <form onSubmit={handleUpdate}>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Content</label>
                <textarea
                  className="form-control content-textarea"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>

              <div className="form-actions">
                <button className="btn-cta">✏️ Update Note</button>
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
