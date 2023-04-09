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
  };

  return (
    <BrowserRouter>
      <div className="App">
        {/* ... (header, about, application, footer) */}

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
