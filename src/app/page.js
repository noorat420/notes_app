"use client";
import Link from "next/link";


export default function Home() {
  return (
    <main className="container text-center py-5 ">
  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="card shadow-lg border-0 rounded-4 p-5">
        <div className="card-body">
          <h1 className="display-5 fw-bold text-primary mb-3">
            📝 Welcome to <span className="text-dark">Scribbly ✏️</span>
          </h1>
          <p className="lead text-muted mb-4">
            Organize your thoughts, jot down ideas, and manage your notes effortlessly.
          </p>

          <Link href="/notes" className="text-decoration-none">
            <button className="btn btn-primary btn-lg rounded-pill shadow-sm">
              🚀 Go to Notes
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</main>

  );
}
