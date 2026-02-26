function saveNote() {
    const text = document.getElementById("noteInput").value;
    if (!text) return;

    let notes = JSON.parse(localStorage.getItem("myNotes") || "[]");
    notes.push(text);
    localStorage.setItem("myNotes", JSON.stringify(notes));
    displayNotes();
}

function displayNotes() {
    const container = document.getElementById("notesDisplay");
    const notes = JSON.parse(localStorage.getItem("myNotes") || "[]");
    container.innerHTML = notes
        .map((n) => `<div class="note-item">${n}</div>`)
        .join("");
}
window.onload = displayNotes;
