const noteData = [
  {
    head: "Computer science",
    content:
      "Computer science Computer science Computer science Computer science",
    date: "24 / 5 / 2023",
  },
  {
    head: "Computer science",
    content:
      "Computer science Computer science Computer science Computer science",
    date: "24 / 5 / 2023",
  },
  {
    head: "Computer science",
    content:
      "Computer science Computer science Computer science Computer science",
    date: "24 / 5 / 2023",
  },
  {
    head: "Computer science",
    content:
      "Computer science Computer science Computer science Computer science",
    date: "24 / 5 / 2023",
  },
  {
    head: "Computer science",
    content:
      "Computer science Computer science Computer science Computer science",
    date: "24 / 5 / 2023",
  },
];

const archiveElement = document.querySelector("#archive");

const noteHead = `<p class="archive__seperator">Notes</p>`;

const generateArchiveItem = (
  archiveItem
) => `<div class="archive__item" id="archive__item">
<h3 class="archive__item-title">${archiveItem.head}</h3>
<p class="archive__item-content">
${archiveItem.content}
</p>
<div class="archive__footer">
<p class="date">${archiveItem.date}</p>
<button class="archive__footer-delete">Delete</button>
</div>
</div>`;

const listItems = noteData
  .map((archiveItem) => generateArchiveItem(archiveItem))
  .join("");

const unorderdList = `<div class="archive__item-notes">${listItems}</div>`;

archiveElement.insertAdjacentHTML("beforeend", noteHead);
archiveElement.insertAdjacentHTML("beforeend", unorderdList);

// notes Data

const pinnedNotesData = [
  {
    head: "pin",
    content:
      "Computer science Computer science Computer science Computer science",
    date: "24 / 5 / 2023",
  },
  {
    head: "Computer science",
    content:
      "Computer science Computer science Computer science Computer science",
    date: "24 / 5 / 2023",
  },
];

const pinnedNotesElement = document.querySelector("#archive");
const pinnedTitle = `<p class="archive__pinned" id="archive__pinned">PINNED</p>`;

const generatepinnedNotesItem = (
  pinnedNotesItem
) => `<div class="archive__item" id="archive__item">

<h3 class="archive__item-title">${pinnedNotesItem.head}</h3>
<p class="archive__item-content">
${pinnedNotesItem.content}
</p>
<div class="archive__footer">
<p class="date">${pinnedNotesItem.date}</p>
<button class="archive__footer-delete">Delete</button>
</div>
</div>`;

const pinnedNoteslistItems = pinnedNotesData
  .map((pinnedNotesItem) => generateArchiveItem(pinnedNotesItem))
  .join("");

const pinnedNotesUnorderdList = `<div class="archive__item-notes">${pinnedNoteslistItems}</div>`;

archiveElement.insertAdjacentHTML("afterbegin", pinnedNotesUnorderdList);
archiveElement.insertAdjacentHTML("afterbegin", pinnedTitle);

// Pinned Notes Data

const noteTitle = document.querySelector("#body__head-title");
const noteContent = document.querySelector("#body__content-text");
const noteDate = document.querySelector("#date");
const noteAuthor = document.querySelector("#author");

document.querySelectorAll("#archive__item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".select").forEach((selectedItem) => {
      selectedItem.classList.remove("select");
    });
    item.classList.add("select");
    noteTitle.textContent = listItems.head;
  });
});

// select shadow
