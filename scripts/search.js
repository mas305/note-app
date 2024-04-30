const searchBtn = document.querySelector(".header__search");
const archive = document.querySelector(".archive");
let noteData = loadNoteData();

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

function renderArchiveItems(keyword) {
  const archiveItems = archive.querySelectorAll(".archive__item");
  archiveItems.forEach((item) => {
    item.style.backgroundColor = "";
  });

  archiveItems.forEach((item) => {
    const title = item.getAttribute("data-head");
    const content = item.getAttribute("data-content");
    const author = item.getAttribute("data-author");
    const date = item.getAttribute("data-date");

    if (
      title.includes(keyword) ||
      content.includes(keyword) ||
      author.includes(keyword) ||
      date.includes(keyword)
    ) {
      // Apply styles for matching items
      // item.style.backgroundColor = "#ec7160"; // Set background color to red
      item.style.boxShadow = "0 0 8px rgba(0, 0, 0, 0.3)"; // Add black box shadow
      item.style.borderRadius = "20px"; // Add black box shadow
    } else {
      // Reset styles for non-matching items
      item.style.backgroundColor = ""; // Reset background color
      item.style.boxShadow = "none"; // Remove box shadow
    }
  });
}

searchBtn.addEventListener("input", () => {
  const searchKeyword = searchBtn.value.trim();

  if (searchKeyword) {
    renderArchiveItems(searchKeyword.toLowerCase());
  } else {
    resetArchiveItems();
  }
});

function resetArchiveItems() {
  const archiveItems = document.querySelectorAll(".archive__item");

  archiveItems.forEach((item) => {
    item.classList.remove("select");
  });

  archiveItems.forEach((item) => {
    // item.style.backgroundColor = "";
    item.style.boxShadow = "none";
  });

  noteTitle.textContent = "";
  noteContent.textContent = "";
  noteDate.textContent = "";
  noteAuthor.textContent = "";
}
