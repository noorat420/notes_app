'use client'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
export default function notes() {

const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const res = await fetch("/api/notes");
    const data = await res.json();
    setNotes(data);
  };

   const deleteNote = async (id) => {
    await fetch("/api/notes", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    fetchNotes(); // refresh list
  };

   useEffect(() => {
    fetchNotes();
  }, []);

  return (
   <main className="container py-5">
  <div className="d-flex justify-content-between align-items-center mb-4">
    <h1 className="fw-bold text-primary">📒 All Notes</h1>
    <Link href="/notes/add" className="text-decoration-none">
      <button className="btn btn-success btn-lg rounded-pill shadow-sm">
        ➕ Add Note
      </button>
    </Link>
  </div>

  {notes.length === 0 ? (
    <div className="alert alert-info text-center" role="alert">
      No notes yet. Click <strong>➕ Add Note</strong> to get started!
    </div>
  ) : (
    <div className="row">
      {notes.map((note) => (
        <div key={note.id} className="col-md-6 col-lg-4 mb-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h5 className="card-title fw-bold">{note.title}</h5>
              <p className="card-text text-muted">{note.content}</p>
            </div>
            <div className="card-footer bg-white border-0 d-flex justify-content-end">
              <button
                onClick={() => deleteNote(note.id)}
                className="btn btn-sm btn-danger rounded-pill"
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

  )
}
