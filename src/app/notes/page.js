'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Notes() {
  const [notes, setNotes] = useState([]);

  // Fetch notes
  const fetchNotes = async () => {
    try {
      const res = await fetch('/api/notes');
      const data = await res.json();
      setNotes(data);
    } catch (err) {
      console.error(err);
    }
  };

  // Delete note
  const deleteNote = async (id) => {
    await fetch('/api/notes', {
      method: 'DELETE',
      body: JSON.stringify({ id }),
    });
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="site-shell">
      {/* Header */}
      <header className="site-header">
        <div className="brand">Scribbly</div>
        <nav>
          <Link href="/notes/add" className="btn btn-outline-secondary me-2">
            Add Note
          </Link>
          <Link href="/" className="btn btn-sm btn-light">
            Home
          </Link>
        </nav>
      </header>

      {/* Main */}
      <main className="container py-5">
        <div className="text-center mb-4">
          <h1 className="fw-bold" style={{ color: '#3a2a1f' }}>
            All Notes
          </h1>
          <div className="mt-3">
            <Link href="/notes/add" className="text-decoration-none">
              <button className="btn-cta">➕ Add Note</button>
            </Link>
          </div>
        </div>

        {/* Empty state */}
        {notes.length === 0 ? (
          <div className="alert alert-info text-center">
            No notes yet. Click <strong>Add Note</strong> to get started!
          </div>
        ) : (
          <div className="row">
            {notes.map((note) => (
              <div key={note.id} className="col-md-6 col-lg-4 mb-4 d-flex">
                <div className="note-card d-flex flex-column flex-grow-1">
                  <div>
                    <h5 className="fw-bold">{note.title}</h5>
                    <p className="text-muted">{note.content}</p>
                  </div>

                  {/* Actions */}
                  <div className="d-flex justify-content-end gap-2 mt-3">
                    <Link
                      href={`/notes/edit/${note.id}`}
                      className="btn btn-sm btn-outline-secondary rounded-pill px-3"
                    >
                      ✏️ Edit
                    </Link>

                    <button
                      onClick={() => deleteNote(note.id)}
                      className="btn btn-sm btn-outline-danger rounded-pill px-3"
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer cards */}
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
