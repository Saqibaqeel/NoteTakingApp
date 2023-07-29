console.log("well come to notes taking app")
const AddNotes = document.querySelector('.AddNotes');
const main = document.querySelector('#main');

const saveNotes = () => {
  const notes = document.querySelectorAll('div.note .Area');
  const data = [];
  notes.forEach((note) => {
    data.push(note.value);
  });

  // Save the data to local storage as a JSON string
  localStorage.setItem('notesData', JSON.stringify(data));

  console.log('Notes saved:', data);
};

AddNotes.addEventListener('click', () => {
  Notes();
});

const Notes = () => {
  const note = document.createElement('div');
  note.classList.add('note');
  note.innerHTML = `
    <div class="toolBar">
      <i class="delete fa-solid fa-trash-can"></i>
      <i class="save fa-solid fa-floppy-disk"></i>
    </div>
    <textarea name="" class="Area"></textarea>
  `;

  main.appendChild(note);

  note.querySelector('.delete').addEventListener('click', () => {
    note.remove();
    saveNotes();
  });

  note.querySelector('.save').addEventListener('click', () => {
    saveNotes();
  });
};

const retrieveNotes = () => {
  const savedData = localStorage.getItem('notesData');
  if (savedData) {
    const data = JSON.parse(savedData);
    data.forEach((noteContent) => {
      const note = document.createElement('div');
      note.classList.add('note');
      note.innerHTML = `
        <div class="toolBar">
          <i class="delete fa-solid fa-trash-can"></i>
          <i class="save fa-solid fa-floppy-disk"></i>
        </div>
        <textarea name="" class="Area">${noteContent}</textarea>
      `;

      main.appendChild(note);

      note.querySelector('.delete').addEventListener('click', () => {
        note.remove();
        saveNotes();
      });

      note.querySelector('.save').addEventListener('click', () => {
        saveNotes();
      });
    });
  }
};

// Load notes from local storage when the page loads
window.addEventListener('load', () => {
  retrieveNotes();
});
