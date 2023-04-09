import React, { useState } from 'react';
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

    const data = `Imię: ${name}\nEmail: ${email}`;
    const blob = new Blob([data], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'dane_uzytkownika.txt';
    link.click();

    // Tutaj możesz dodać dalsze kroki, np. przesłanie formularza do serwera
  };
  return (
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
          <li>Kurs programowania w Python</li>
          <li>Wprowadzenie do sztucznej inteligencji</li>
          <li>Podstawy analizy danych</li>
          <li>Web development z React</li>
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
    </div>
  );
}

export default App;
