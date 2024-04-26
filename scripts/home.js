// Array of data
const noteData = [
  {
    pin: false,
    head: "Computer science1",
    content:
      "Computer science Computer science Computer science Computer science",
    date: "20 / 5 / 2023",
    author: "MAS",
  },
  {
    pin: false,
    head: "Computer science2",
    content:
      "Computer science Computer science Computer science Computer science",
    date: "21 / 5 / 2023",
    author: "MAS",
  },
  {
    pin: false,
    head: "Computer science3",
    content:
      "Computer science Computer science Computer science Computer science",
    date: "22 / 5 / 2023",
    author: "MAS",
  },
  {
    pin: false,
    head: "Computer science4",
    content:
      "Computer science Computer science Computer science Computer science",
    date: "23 / 5 / 2023",
    author: "MAS",
  },
  {
    pin: true,
    head: "2nd pin note",
    content:
      "Computer science Computer science Computer science Computer science",
    date: "24 / 5 / 2023",
    author: "MAS",
  },
  {
    pin: false,
    head: "Computer science5",
    content:
      "Computer science Computer science Computer science Computer science",
    date: "24 / 5 / 2023",
    author: "MAS",
  },
  {
    pin: true,
    head: "1st pin note",
    content:
      "Computer science Computer science Computer science Computer science",
    date: "24 / 5 / 2023",
    author: "MAS",
  },
];

// DOM element where archive items will be rendered
const archiveElement = document.querySelector("#archive");

// HTML markup for the section header
const noteHead = `<p class="archive__seperator">Notes</p>`;

// Function to generate HTML for a regular archive item
const generateArchiveItem = (archiveItem) => `
  <div class="archive__item"
       data-head="${archiveItem.head}"
       data-content="${archiveItem.content}"
       data-date="${archiveItem.date}"
       data-author="${archiveItem.author || "Unknown"}">
    <h3 class="archive__item-title">${archiveItem.head}</h3>
    <p class="archive__item-content">${archiveItem.content}</p>
    <div class="archive__footer">
      <p class="date">${archiveItem.date}</p>
      <button class="archive__footer-delete">Delete</button>
    </div>
  </div>
`;

// Function to generate HTML for a pinned archive item
const generatePinnedNotesItem = (pinnedNotesItem) => `
  <div class="archive__item"
       data-head="${pinnedNotesItem.head}"
       data-content="${pinnedNotesItem.content}"
       data-date="${pinnedNotesItem.date}"
       data-author="${pinnedNotesItem.author || ""}">
    <h3 class="archive__item-title">${pinnedNotesItem.head}</h3>
    <p class="archive__item-content">${pinnedNotesItem.content}</p>
    <div class="archive__footer">
      <p class="date">${pinnedNotesItem.date}</p>
      <button class="archive__footer-delete">Delete</button>
    </div>
  </div>
`;

// Insert section header into archiveElement
archiveElement.insertAdjacentHTML("beforeend", noteHead);

// Render archive items based on the data
noteData.forEach((archiveItem) => {
  if (archiveItem.pin) {
    // Generate HTML for pinned item and insert at the beginning of the list
    const htmlElement = generatePinnedNotesItem(archiveItem);
    archiveElement.insertAdjacentHTML("afterbegin", htmlElement);
  } else {
    // Generate HTML for regular item and insert at the end of the list
    const htmlElement = generateArchiveItem(archiveItem);
    archiveElement.insertAdjacentHTML("beforeend", htmlElement);
  }
});

// Insert section header for pinned items into archiveElement
const pinnedTitle = `<p class="archive__pinned" id="archive__pinned">PINNED</p>`;
archiveElement.insertAdjacentHTML("afterbegin", pinnedTitle);

// DOM elements for displaying selected item details
const noteTitle = document.querySelector("#body__head-title");
const noteContent = document.querySelector("#body__content-text");
const noteDate = document.querySelector("#date");
const noteAuthor = document.querySelector("#author");

// Get all archive items and attach click event listener
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
      head: item.getAttribute("data-head"),
      content: item.getAttribute("data-content"),
      date: item.getAttribute("data-date"),
      author: item.getAttribute("data-author"),
    };

    // Update UI elements with the retrieved data
    noteTitle.textContent = clickedItemData.head;
    noteContent.textContent = clickedItemData.content;
    noteDate.textContent = clickedItemData.date;
    noteAuthor.textContent = ` - By ${clickedItemData.author}`;
  });
});

document.querySelectorAll(".archive__footer-delete").forEach((deleteBtn) => {
  deleteBtn.addEventListener("click", () => {
    const archiveItem = deleteBtn.closest(".archive__item");
    const noteHead = archiveItem.getAttribute("data-head");
    archiveItem.remove();

    // if (noteTitle.textContent === noteHead) {
    //   noteTitle.textContent = "";
    //   noteContent.textContent = "";
    //   noteDate.textContent = "";
    //   noteAuthor.textContent = "" ;
    // }

    noteData = noteData.filter((note) => note.head !== noteHead);

    console.log(noteData);
  });
});
