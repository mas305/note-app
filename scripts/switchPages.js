const NoteSection = document.querySelector("#archiveAndBody");
const addNoteSection = document.querySelector("#addNote");
const notesBtn = document.querySelector(".menu__notes-btn");
const addNotesBtn = document.querySelector(".menu__add-notes-btn");
const container = document.querySelector(".container");
const menu = document.querySelector(".menu");
const circle = document.querySelector(".circle");

function displayNoteSection() {
  NoteSection.style.display = "flex";
  addNoteSection.style.display = "none";
}

function displayAddNoteSection() {
  NoteSection.style.display = "none";
  addNoteSection.style.display = "flex";
}

addNotesBtn.addEventListener("click", () => {
  displayAddNoteSection();
  addNotesBtn.classList.add("select-notes");
  notesBtn.classList.remove("select-notes");
});

circle.addEventListener("click", () => {
  displayAddNoteSection();
  addNotesBtn.classList.add("select-notes");
  notesBtn.classList.remove("select-notes");
});

notesBtn.addEventListener("click", () => {
  displayNoteSection();
  notesBtn.classList.add("select-notes");
  addNotesBtn.classList.remove("select-notes");
  location.reload();
});

const mediaQuery = window.matchMedia("(max-width: 500px)");

// function anyThing(mediaQuery) {
//   if (mediaQuery.matches) {
//     addNotesBtn.addEventListener("click", () => {
//       displayAddNoteSection();
//       menu.style.display = "none";
//     });
//   }
// }
