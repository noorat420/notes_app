let notes =[];
// GET → fetch all notes
export async function GET() {
  return new Response(JSON.stringify(notes), {
    status: 200,
    headers: {
      "Content_Type": "application/json",
    },
  });
}

// POST → add a new note
export async function POST(request) {
  const body = await request.json(); // read request body
  const newNote = { id: Date.now().toString(), ...body };
  notes.push(newNote);
  return new Response(JSON.stringify(newNote), {
    status: 201, // created
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// DELETE → remove a note by id
export async function DELETE(request) {
  const { id } = await request.json(); // { id }
  notes = notes.filter((note) => note.id !== id);

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
