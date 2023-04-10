import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import App from './script';


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