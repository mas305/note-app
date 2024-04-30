const initialNotes = [
  {
    title: "Frontend Developer (React.js)",
    author: "Mostafa Ameen",
    content:
      "Passionate React.js developer with a keen eye for user experience. Dedicated to crafting intuitive and responsive frontend solutions. Currently advancing my skills in modern web development. Excited about leveraging React's ecosystem to build dynamic interfaces. Committed to delivering high-quality, scalable applications for optimal user engagement.",
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
const archiveElement = document.querySelector("#archive");

function archivePinnedNoteHeader() {
  // Insert section header for pinned items into archiveElement
  const pinnedTitle = `<p class="archive__pinned" id="archive__pinned">PINNED</p>`;
  archiveElement.insertAdjacentHTML("afterbegin", pinnedTitle);
}
function archiveNoteHeader() {
  const noteHead = `<p class="archive__seperator">Notes</p>`;
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
    console.log(clickedItemData);
    noteTitle.textContent = clickedItemData.title;
    noteContent.textContent = clickedItemData.content;
    noteDate.textContent = clickedItemData.date;
    noteAuthor.textContent = ` - By ${clickedItemData.author}`;
  });
});
