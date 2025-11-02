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

### 3. Code Architecture & Best Practices

- Use **object-oriented programming (OOP)** where appropriate.
- Apply **functional programming principles** to ensure modularity and predictability.
- Follow **SOLID design principles** for clean, maintainable code.
- Abstract repeated logic into **reusable functions or classes**.
- Add **JSDoc comments** for major functions and modules.

---

## Technical Requirements

- Use **HTML, CSS (or Tailwind), and JavaScript**.
- No page reloads: Use JavaScript to handle modal behaviour and data rendering.
- Ensure all UI states (modal open/close, hover effects, etc.) work smoothly.
- Ensure all data is displayed in a **readable and accessible format**.

---

## Design & UX Goals

- Visually appealing UI with clear layout and hierarchy.
- Use a consistent **colour scheme, typography, spacing, and sizing**.
- Accessibility considerations (contrast, font readability, responsive buttons).
- App should be fully **responsive** on desktop, tablet, and mobile.

Make sure to dive into the wireframe reference images folder for guidance on how to build the UI structure. Note that the UI wireframes for both Desktop and Mobile are included.  

![alt text](<wireframe reference images/desktop view/desktop_modal_view.png>)

---

## Deliverables

- A fully functional, responsive podcast preview web application.
- Clean, well-commented source code (HTML, CSS, JS).
