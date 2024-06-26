let noteData = [];
// Generate Date
const date = new Date();
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const month = monthNames[date.getMonth()];

const addNoteBtn = document.querySelector(".addNote__btns__addToNotes");
const addPinnedNoteBtn = document.querySelector(".addNote__btns__addToPinned");
const titleContent = document.querySelector("#title-text");
const authorContent = document.querySelector("#author-text");
const noteText = document.querySelector("#note-text");
const notesSection = document.querySelector("#archive");
const PinnedSection = document.querySelector(".archive__Pinned");

document.addEventListener("DOMContentLoaded", () => {
  noteData = loadNoteData();

  displayNotes();
});

function loadNoteData() {
  let storedData = localStorage.getItem("noteData");
  try {
    let parsedData = JSON.parse(storedData);
    return Array.isArray(parsedData) ? parsedData : [];
  } catch (error) {
    console.error("Error loading note data from local storage:", error);
    return [];
  }
}

function saveNoteData() {
  localStorage.setItem("noteData", JSON.stringify(noteData));
}

function displayNotes() {
  noteData.forEach((note) => {
    const html = addNoteToNotes(note);
    if (note.isPinned) {
      PinnedSection.insertAdjacentHTML("beforeend", html);
    } else {
      notesSection.insertAdjacentHTML("beforeend", html);
    }
  });
}
function addNoteToNotes(data) {
  return `<div class="archive__item"
              data-head="${data.title}"
              data-content="${data.content}"
              data-date="${data.date}"
              data-author="${data.author || "Unknown"}">
            <h3 class="archive__data-title">${data.title}</h3>
            <p class="archive__data-content">${data.content}</p>
            <div class="archive__footer">
              <p class="date">${data.date}</p>
              <button class="archive__footer-delete">Delete</button>
            </div>
          </div>`;
}

addNoteBtn.addEventListener("click", () => {
  const newData = {
    title: titleContent.value,
    isPinned: false,
    author: authorContent.value,
    content: noteText.value,
    date: `${month} ${date.getDate()}, ${date.getFullYear()}`,
  };

  noteData.push(newData);

  saveNoteData();

  const html = addNoteToNotes(newData);
  notesSection.insertAdjacentHTML("beforeend", html);

  titleContent.value = "";
  noteText.value = "";
  authorContent.value = "";
  location.reload();
});

addPinnedNoteBtn.addEventListener("click", () => {
  const newData = {
    title: titleContent.value,
    isPinned: true,
    author: authorContent.value,
    content: noteText.value,
    date: `${month} ${date.getDate()}, ${date.getFullYear()}`,
  };

  noteData.push(newData);

  saveNoteData();

  const html = addNoteToNotes(newData);
  PinnedSection.insertAdjacentHTML("beforeend", html);

  titleContent.value = "";
  noteText.value = "";
  authorContent.value = "";
  location.reload();
});

//////////////////////////////////////////////////////Display data on Body//////////////////////////////////////////////

const noteTitle = document.querySelector("#body__head-title");
const noteContent = document.querySelector("#body__content-text");
const noteDate = document.querySelector("#date");
const noteAuthor = document.querySelector("#author");
const archiveElement = document.querySelector("#archive");
const bodySection = document.querySelector("#body");

document.addEventListener("DOMContentLoaded", () => {
  noteData = loadNoteData();

  const archiveItems = document.querySelectorAll(".archive__item");

  console.log(noteData);
  archiveItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (mediaQuery.matches) {
        archiveElement.style.display = "none";
        bodySection.style.display = "block";
      }
      const previouslySelected = archiveElement.querySelector(
        ".archive__item.select"
      );
      if (previouslySelected) {
        previouslySelected.classList.remove("select");
      }

      item.classList.add("select");

      const clickedItemData = {
        title: item.getAttribute("data-head"),
        author: item.getAttribute("data-author"),
        content: item.getAttribute("data-content"),
        date: item.getAttribute("data-date"),
      };
      // console.log(clickedItemData);
      noteTitle.textContent = clickedItemData.title;
      noteContent.textContent = clickedItemData.content;
      noteDate.textContent = clickedItemData.date;
      noteAuthor.textContent = ` / By ${clickedItemData.author}`;
    });
  });
});
const mediaQuery = window.matchMedia("(max-width: 500px)");

function handle(mediaQuery) {
  if (mediaQuery.matches) {
    notesSection.style.visibility = "hidden";
    bodySection.style.visibility = "visible";
  }
}

export { noteData, saveNoteData, loadNoteData };

////////////////////////////////////////////////Delete Btn //////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  noteData = loadNoteData();

  document.querySelectorAll(".archive__footer-delete").forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", () => {
      const archiveItem = deleteBtn.closest(".archive__item");
      const noteHead = archiveItem.getAttribute("data-head");
      archiveItem.remove();

      noteData = noteData.filter((note) => note.title !== noteHead);

      saveNoteData(noteData);
      console.log(noteData);
    });
  });
});
