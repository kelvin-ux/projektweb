const courses = [
  { id: "kurs1", title: "kurs z pythona", url: "python.html" },
  { id: "kurs2", title: "kurs z AI", url: "ai.html" },
  { id: "kurs3", title: "kurs z data analiza", url: "data.html" },
  { id: "kurs4", title: "kurs z reacta", url: "web.html" },
];

document.getElementById("search-input").addEventListener("input", searchCourses);
document.getElementById("search-input").addEventListener("keydown", navigateResults);


function searchCourses(event) {
  const searchTerm = event.target.value.toLowerCase();
  const searchResultsElement = document.getElementById("search-results");

  if (searchTerm === "") {
    searchResultsElement.classList.remove("show");
    searchResultsElement.classList.add("hide");
    setTimeout(() => {
      searchResultsElement.innerHTML = "";
    }, 300);
    return;
  }

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm)
  );

  let searchResultsHTML = "";

  filteredCourses.forEach((course) => {
    searchResultsHTML += `<p data-url="${course.url}">${course.title}</p>`;
  });

  searchResultsElement.innerHTML = searchResultsHTML;
  searchResultsElement.classList.remove("hide");
  searchResultsElement.classList.add("show");
  currentSelection = -1;
}


function navigateResults(event) {
  const searchResultsElement = document.getElementById("search-results");
  const searchResults = Array.from(searchResultsElement.children);

  if (event.key === "ArrowDown") {
    if (currentSelection < searchResults.length - 1) {
      currentSelection++;
      searchResults[currentSelection].scrollIntoView({ block: "nearest" });
      searchResults[currentSelection].classList.add("active");
      if (currentSelection > 0) {
        searchResults[currentSelection - 1].classList.remove("active");
      }
    }
  } else if (event.key === "ArrowUp") {
    if (currentSelection > 0) {
      currentSelection--;
      searchResults[currentSelection].scrollIntoView({ block: "nearest" });
      searchResults[currentSelection].classList.add("active");
      searchResults[currentSelection + 1].classList.remove("active");
    }
  } else if (event.key === "Enter" && currentSelection > -1) {
    window.location.href = searchResults[currentSelection].dataset.url;
  }
}

function updateSearchInput(value) {
  const searchInputElement = document.getElementById("search-input");
  searchInputElement.value = value;
}


document.getElementById("search-results").addEventListener("click", (event) => {
  if (event.target && event.target.matches("p")) {
    window.location.href = event.target.dataset.url;
  }
});