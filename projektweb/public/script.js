// wyszukiwanie 

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
  const searchResultsItems = searchResultsElement.getElementsByTagName("p");

  if (event.key === "ArrowDown") {
    if (currentSelection < searchResultsItems.length - 1) {
      if (currentSelection >= 0) {
        searchResultsItems[currentSelection].classList.remove("selected");
      }
      currentSelection++;
      searchResultsItems[currentSelection].classList.add("selected");
      updateSearchInput(searchResultsItems[currentSelection].textContent);
    }
  } else if (event.key === "ArrowUp") {
    if (currentSelection > 0) {
      searchResultsItems[currentSelection].classList.remove("selected");
      currentSelection--;
      searchResultsItems[currentSelection].classList.add("selected");
      updateSearchInput(searchResultsItems[currentSelection].textContent);
    }
  } else if (event.key === "Enter" && currentSelection >= 0) {
    window.location.href = searchResultsItems[currentSelection].dataset.url;
  }
}


function updateSearchInput(value) {
  const searchInputElement = document.getElementById("search-input");
  searchInputElement.value = value;
}

function showSearchResults(searchResults) {
  searchResultsContainer.innerHTML = "";
  searchResults.forEach((result, index) => {
    const resultElement = document.createElement("p");
    resultElement.innerHTML = `<img src="${result.logo}" alt="Logo ${result.title}">${result.title}`;
    resultElement.addEventListener("click", () => {
      window.location.href = result.link;
    });
    if (index === currentSelection) {
      resultElement.classList.add("selected");
    }
    searchResultsContainer.appendChild(resultElement);
  });
}


document.getElementById("search-results").addEventListener("click", (event) => {
  if (event.target && event.target.matches("p")) {
    window.location.href = event.target.dataset.url;
  }
});

document.getElementById("menu-button").addEventListener("click", function() {
  const sidebarMenu = document.getElementById("sidebar-menu");
  if (sidebarMenu.style.transform === "translateX(0%)") {
    sidebarMenu.style.transform = "translateX(100%)";
  } else {
    sidebarMenu.style.transform = "translateX(0%)";
  }
});

