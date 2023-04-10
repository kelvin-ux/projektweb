const courses = [
  { id: "kurs1", title: "kurs z pythona", url: "python.html" },
  { id: "kurs2", title: "kurs z AI", url: "ai.html" },
  { id: "kurs3", title: "kurs z data analiza", url: "data.html" },
  { id: "kurs4", title: "kurs z reacta", url: "web.html" },
];

document.getElementById("search-input").addEventListener("input", searchCourses);

function searchCourses(event) {
  const searchTerm = event.target.value.toLowerCase();
  const searchResultsElement = document.getElementById("search-results");

  if (searchTerm === "") {
    searchResultsElement.innerHTML = "";
    searchResultsElement.classList.remove("show");
    return;
  }

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm)
  );

  let searchResultsHTML = "";

  filteredCourses.forEach((course) => {
    searchResultsHTML += `<p onclick="window.location.href='${course.url}'">${course.title}</p>`;
  });

  searchResultsElement.innerHTML = searchResultsHTML;
  searchResultsElement.classList.add("show");
}
