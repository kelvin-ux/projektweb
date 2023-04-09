import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email) {
      alert('Wszystkie pola są wymagane.');
      return;
    }
    // Tutaj możesz dodać dalsze kroki, np. przesłanie formularza do serwera
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>Szkoła Letnia</h1>
        </header>

        <section id="about">
          <h2>O szkole letniej</h2>
          <p>Nasza szkoła letnia oferuje szereg interesujących kursów z różnych dziedzin. Zapraszamy do zapoznania się z ofertą i zapisów!</p>
        </section>

        <section id="courses">
          <h2>Dostępne kursy</h2>
          <ul>
            <li>
              <Link to="/kurs-programowania-python">Kurs programowania w Python</Link>
            </li>
            <li>
              <Link to="/wprowadzenie-do-sztucznej-inteligencji">Wprowadzenie do sztucznej inteligencji</Link>
            </li>
            <li>
              <Link to="/podstawy-analizy-danych">Podstawy analizy danych</Link>
            </li>
            <li>
              <Link to="/web-development-react">Web development z React</Link>
            </li>
          </ul>
        </section>

        <section id="application">
          <h2>Zapisy na kursy</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Imię:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button type="submit">Zapisz się</button>
          </form>
        </section>

        <footer>
          <p>&copy; 2023 Szkoła Letnia. Wszystkie prawa zastrzeżone.</p>
        </footer>

        <Switch>
          <Route exact path="/" component={strgl} />
          <Route path="/logowanie" component={login} />
          <Route path="/kurs-programowania-python" component={CoursePython} />
          <Route path="/wprowadzenie-do-sztucznej-inteligencji" component={CourseAI} />
          <Route path="/podstawy-analizy-danych" component={CourseDataAnalysis} />
          <Route path="/web-development-react" component={CourseReact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}


// funckje do przycisków //




const courses = [
  "kurs z pythona",
  "kurs z AI",
  "kurs z data analiza",
  "kurs z reacta"
];

function searchCourses() {
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");
  const searchText = searchInput.value.toLowerCase().trim();
  searchResults.innerHTML = "";

  if (searchText.length === 0) return;

  const matchedCourses = courses.filter(course => course.toLowerCase().includes(searchText));

  matchedCourses.forEach(course => {
    const resultElement = document.createElement("div");
    resultElement.classList.add("search-result");
    resultElement.textContent = course;

    resultElement.addEventListener("click", () => {
      const courseIndex = matchedCourses.indexOf(course) + 1;
      window.location.href = `kurs${courseIndex}.html`;
    });

    searchResults.appendChild(resultElement);
  });
}

document.getElementById("search-input").addEventListener("input", searchCourses);





export default App;
