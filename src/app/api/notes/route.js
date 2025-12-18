// ✅ Global in-memory store (persists during dev session)
global.notes = global.notes || [];

// Always read from global
let notes = global.notes;

// GET → fetch all notes
export async function GET() {
  return new Response(JSON.stringify(notes), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// POST → add a new note
export async function POST(request) {
  const body = await request.json();

  const newNote = {
    id: Date.now().toString(),
    title: body.title,
    content: body.content,
    createdAt: new Date().toISOString(),
  };

  notes.push(newNote);
  global.notes = notes; // 🔒 persist

  return new Response(JSON.stringify(newNote), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}

// PUT → update existing note
export async function PUT(request) {
  const { id, title, content } = await request.json();

  const index = notes.findIndex((note) => note.id === id);

  if (index === -1) {
    return new Response(
      JSON.stringify({ message: "Note not found" }),
      { status: 404 }
    );
  }

  notes[index] = {
    ...notes[index],
    title,
    content,
    updatedAt: new Date().toISOString(),
  };

  global.notes = notes; // 🔒 persist

  return new Response(JSON.stringify(notes[index]), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// DELETE → remove a note
export async function DELETE(request) {
  const { id } = await request.json();

  notes = notes.filter((note) => note.id !== id);
  global.notes = notes; // 🔒 persist

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
