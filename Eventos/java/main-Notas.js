let data ={
    notes : [
        {
            id: 1,
            title: 'Tender la cama',
            text: 'Por las mañanas realizar esto a las 7am',
            completed: true
        },
        {
            id: 2,
            title: 'Ir al gimnasio',
            text: 'Por las tardes esto a las 7pm',
            completed: false
        },
        {
            id: 3,
            title: 'Salir a ver una pelicula',
            text: 'Ir en la semana a ver una pelicula solo',
            completed: true
        }
    ]
}



let globalId = 3;


function renderNotes(notesToDisplay) {
    const container = document.getElementById('notesContainer');
    container.innerHTML = '';

    if (notesToDisplay.length === 0) {
        container.innerHTML = '<p>No hay notas para mostrar</p>';
        return;
    }

    notesToDisplay.forEach(note => {
        const noteCard = document.createElement('div');
        noteCard.className = 'card mb-3';
        noteCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${note.title}</h5>
                <p class="card-text">${note.text}</p>
                <button class="btn btn-danger" onclick="deleteNote(${note.id})">Borrar Nota</button>
                <input type="checkbox" onclick="toggleCompleted(${note.id})" ${note.completed ? 'checked' : ''}>
            </div>
        `;
        container.appendChild(noteCard);
    });
}


function addNote() {
    const title = document.getElementById('noteTitle').value.trim();
    const text = document.getElementById('noteText').value.trim();

    if (title && text) {
        const newNote = {
            id: ++globalId,
            title: title,
            text: text,
            completed: false
        };
        notes.push(newNote);
        clearFields();
        renderNotes(notes);
    }
}


function clearFields() {
    document.getElementById('noteTitle').value = '';
    document.getElementById('noteText').value = '';
}


function deleteNote(id) {
    notes = notes.filter(note => note.id !== id);
    renderNotes(notes);
}


function toggleCompleted(id) {
    notes = notes.map(note => note.id === id ? { ...note, completed: !note.completed } : note);
    renderNotes(notes);
}


function filterByCompletion(notesArray) {
    const showCompleted = document.getElementById('filterCompleted').checked;
    return showCompleted ? notesArray.filter(note => note.completed) : notesArray;
}


function filterByText(notesArray, searchText) {
    if (!searchText) return notesArray;
    return notesArray.filter(note => note.title.includes(searchText) || note.text.includes(searchText));
}


function applyFilters() {
    const searchText = document.getElementById('filterText').value.trim();
    const filteredNotes = filterByCompletion(filterByText(notes, searchText));
    renderNotes(filteredNotes);
}


renderNotes(notes);
