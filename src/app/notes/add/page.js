'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
export default function add() {

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
  <main className="container py-5">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body p-4">
          <h2 className="mb-4 text-center text-primary">
            ➕ Add a New Note
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Title */}
            <div className="mb-3">
              <label htmlFor="title" className="form-label fw-bold">
                Title
              </label>
              <input
                id="title"
                type="text"
                className="form-control"
                placeholder="Enter note title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Content */}
            <div className="mb-3">
              <label htmlFor="content" className="form-label fw-bold">
                Content
              </label>
              <textarea
                id="content"
                className="form-control"
                rows="5"
                placeholder="Write your note here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg rounded-pill">
                💾 Save Note
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</main>

  )
}
