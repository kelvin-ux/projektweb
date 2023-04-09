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
          {/* Miejsce na informacje o prawach autorskich i dane kontaktowe */}
          <p>&copy; 2023 Szkoła Letnia. Wszystkie prawa zastrzeżone.</p>
        </footer>

        {/* Dodajemy routing dla poszczególnych stron kursów */}
        <Route path="/kurs-programowania-python" component={CoursePython} />
        <Route path="/wprowadzenie-do-sztucznej-inteligencji" component={CourseAI} />
        <Route path="/podstawy-analizy-danych" component={CourseDataAnalysis} />
        <Route path="/web-development-react" component={CourseReact} />
      </div>
    </BrowserRouter>
  );
}

function CoursePython(){
  return(
    <div>
      <h2>Kurs pytonga</h2>
      <p>kurs uczacy w pytongi</p>
      <p>Cena: I tak cie nie stać</p>
    </div>
  );
}

function CourseAI(){
  return(
    <div>
      <h2>Kurz z AI</h2>
      <p>Nauczymy cie jak klepac AI</p>
      <p>Cena: Duzo</p>
    </div>
  )
}

function CourseDataAnalysis(){
  return(
    <div>
      <h2>Kurs o danych</h2>
      <p>uczymy sie klepac w exela</p>
      <p>cena: 0 PLN</p>
    </div>
  )
}

function CourseReact(){
  return(
    <div>
      <h2>Kurs z weba</h2>
      <p>My sami nic nie potrafimy wiec sam sie uczysz</p>
      <p>Cena: Zapłacimy ci za ten kurs!</p>
    </div>
  )
}

export default App;
