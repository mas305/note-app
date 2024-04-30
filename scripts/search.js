const searchBtn = document.querySelector(".header__search");
const archive = document.querySelector(".archive");
let noteData = loadNoteData(); // Assuming you have a function to load note data from local storage

// Function to load note data from local storage
function loadNoteData() {
  let storedData = localStorage.getItem("noteData");
  try {
    // Attempt to parse the stored data as JSON
    let parsedData = JSON.parse(storedData);
    // Check if parsed data is an array; if not, initialize an empty array
    return Array.isArray(parsedData) ? parsedData : [];
  } catch (error) {
    console.error("Error loading note data from local storage:", error);
    return []; // Return empty array if parsing or loading fails
  }
}

// Function to render archive items based on search keyword
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
      item.style.backgroundColor = "#ec7160"; // Set background color to red
    }
  });
}

searchBtn.addEventListener("input", () => {
  const searchKeyword = searchBtn.value.trim(); // Get input value and trim whitespace

  if (searchKeyword) {
  }
  renderArchiveItems(searchKeyword.toLowerCase()); // Convert keyword to lowercase for case-insensitive search
  // Render archive items based on the search keyword
});
