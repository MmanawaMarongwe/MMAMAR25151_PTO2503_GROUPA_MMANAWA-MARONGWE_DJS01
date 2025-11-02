# DJS01: Vanilla JS Podcast App

## Overview

This project is a responsive podcast web application built with Vanilla JavaScript. It allows users to browse podcast shows on a landing page and view detailed information in a modal pop-up, all without leaving the page.

The app focuses on modular code architecture, OOP principles, and clean, maintainable JavaScript following the SOLID guidelines.

---
## 🧠 Features

### 🎙️ Landing Page – Podcast Previews

- Dynamically renders a grid of podcast previews.
- Each podcast card includes:
  - 🎨 Cover image  
  - 🎧 Podcast title  
  - 📅 Number of seasons  
  - 🏷️ Genre names  
  - ⏰ Last updated date (formatted for readability)

### 💬 Modal View – Show Details

- Clicking a podcast card opens a modal with:
  - Larger cover image  
  - Full podcast description  
  - Genre tags  
  - Season titles with episode counts  
  - Last updated date (human-readable)
- The modal can be closed via:
  - Overlay click  
  - Close button  
  - Escape key

---
## 🛠️ Tech Stack  
- **HTML5**  
- **CSS3** (Responsive, mobile-first design)  
- **JavaScript (ES6 Modules)**  

---

## 📖 How to Use  
1. Open `index.html` in your browser using **Live Server**).  
2. Browse the **podcast previews** displayed on the landing page.  
3. Click a podcast card to **open the modal** and view detailed information.  
4. Close the modal by clicking the **overlay**, **close button**, or pressing the **Escape key**.  


## 🧩 Code Architecture  

| Module | Responsibility |
|---------|----------------|
| `data.js` | Contains podcast, genre, and season data |
| `createOption.js` | Builds dropdown options dynamically |
| `createCard.js` | Creates podcast preview cards |
| `makePodcast.js` | Constructs podcast data objects and helper methods |
| `createModal.js` | Generates the modal element |
| `modalState.js` | Manages modal open/close state |
| `renderModal.js` | Handles displaying and rendering modals (refactored helper) |
| `createPodcastApp.js` | Main factory function connecting data, UI, and helpers |
| `main.js` | Entry point — initializes and launches the app |

Each module follows **Single Responsibility**, ensuring clear, reusable, and testable code.  

---
## 🧠 Code Quality  
- Follows **SOLID** principles for structure and maintainability.  
- Written using **ES6+** features (destructuring, template literals, arrow functions).  
- Modular organization ensures reusable, testable, and scalable code.  
- Clear naming conventions and inline documentation for readability.  

---

## 🎯 Future Improvements  
- Add **genre-based filtering** functionality.  
- Include a **search bar** for finding specific podcasts.  
- Integrate a **real podcast API** for dynamic, live data.

  
---

## Deliverables

- A fully functional, responsive podcast preview web application.
- Clean, well-commented source code (HTML, CSS, JS).
