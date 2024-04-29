
const initialNotes = [
  {
    title: "Frontend Developer (React.js)",
    author: "Mostafa Ameen",
    content:
      "Hello there! I am a dedicated Frontend developer currently pursuing",
    isPinned: true,
    date: "Feb 8, 2021",
  },
  {
    title: "🎯 ToDoList Project App",
    author: "MAS",
    content:
      "Presenting a meticulously crafted React TodoList: a proficient task management ",
    isPinned: false,
    date: "Aug 2, 2023",
  },
];
// DOM element where archive items will be rendered
const archiveElement = document.querySelector("#archive");

function archivePinnedNoteHeader() {
  // Insert section header for pinned items into archiveElement
  const pinnedTitle = `<p class="archive__pinned" id="archive__pinned">PINNED</p>`;
  archiveElement.insertAdjacentHTML("afterbegin", pinnedTitle);
}
function archiveNoteHeader() {
  // HTML markup for the section header
  const noteHead = `<p class="archive__seperator">Notes</p>`;
  // Insert section header into archiveElement
  archiveElement.insertAdjacentHTML("beforeend", noteHead);
}
function generateDefultArchiveItem(item) {
  return `<div class="archive__item"
           data-head="${item.title}"
           data-content="${item.content}"
           data-date="${item.date}"
           data-author="${item.author || "Unknown"}">
        <h3 class="archive__data-title">${item.title}</h3>
        <p class="archive__data-content">${item.content}</p>
        <div class="archive__footer">
          <p class="date">${item.date}</p>
          <button class="archive__footer-delete">Delete</button>
        </div>
      </div>`;
}

archivePinnedNoteHeader();
initialNotes.forEach((item) => {
  if (item.isPinned) {
    const htmlElement = generateDefultArchiveItem(item);
    archiveElement.insertAdjacentHTML("beforeend", htmlElement);
  }
});

archiveNoteHeader();
initialNotes.forEach((item) => {
  if (!item.isPinned) {
    const htmlElement = generateDefultArchiveItem(item);
    archiveElement.insertAdjacentHTML("beforeend", htmlElement);
  }
});

//////////////////////////////////////////////////////Display data on Body//////////////////////////////////////////////

const noteTitle = document.querySelector("#body__head-title");
const noteContent = document.querySelector("#body__content-text");
const noteDate = document.querySelector("#date");
const noteAuthor = document.querySelector("#author");

const archiveItems = document.querySelectorAll(".archive__item");

archiveItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove 'select' class from previously selected item if any
    const previouslySelected = archiveElement.querySelector(
      ".archive__item.select"
    );
    if (previouslySelected) {
      previouslySelected.classList.remove("select");
    }

    // Add 'select' class to the clicked item
    item.classList.add("select");

    // Retrieve data attributes from the clicked item
    const clickedItemData = {
      title: item.getAttribute("data-head"),
      author: item.getAttribute("data-author"),
      content: item.getAttribute("data-content"),
      date: item.getAttribute("data-date"),
    };
    console.log(clickedItemData);
    // Update UI elements with the retrieved data
    noteTitle.textContent = clickedItemData.title;
    noteContent.textContent = clickedItemData.content;
    noteDate.textContent = clickedItemData.date;
    noteAuthor.textContent = ` - By ${clickedItemData.author}`;
  });
});
