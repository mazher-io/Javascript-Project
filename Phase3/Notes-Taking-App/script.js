// Dom Elements

const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesList = document.getElementById("notesList");

// Retrieve notes from local storage or initialize empty array
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Function to render notes

function renderNotes() {
  notesList.innerHTML = "";
  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    noteDiv.innerHTML = `
      <div class="note-title">${note.title}</div>
      <p>${note.description}</p>
      <span class="delete-btn" onclick="deleteNote(${index})">Delete</span>
    `;
    notesList.appendChild(noteDiv);
  });
}

// Add a new note
function addNote() {
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
  
    if (title && description) {
      notes.push({ title, description });
      localStorage.setItem('notes', JSON.stringify(notes)); // Save to local storage
      renderNotes();
      titleInput.value = '';
      descriptionInput.value = '';
    } else {
      alert('Please fill in both fields');
    }
  }


// Delete a note
function deleteNote(index) {
    notes.splice(index, 1); // Remove note from array
    localStorage.setItem('notes', JSON.stringify(notes)); // Update local storage
    renderNotes();
  }
  
  // Event listener for adding notes
  addNoteBtn.addEventListener('click', addNote);
  
  // Render notes on page load
  renderNotes();
  
