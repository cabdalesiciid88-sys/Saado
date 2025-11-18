let notes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes() {
    const container = document.getElementById("notesContainer");
    container.innerHTML = "";

    notes.forEach((note, index) => {
        container.innerHTML += `
            <div class="note">
                <span class="deleteBtn" onclick="deleteNote(${index})">x</span>
                ${note}
            </div>
        `;
    });
}

function addNote() {
    const input = document.getElementById("noteInput");

    if (input.value.trim() === "") {
        alert("Write something first!");
        return;
    }

    notes.push(input.value);
    localStorage.setItem("notes", JSON.stringify(notes));

    input.value = "";
    displayNotes();
}

function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}

displayNotes();