# Task Manager App

A simple, responsive To-Do application built with pure HTML, CSS, and vanilla JavaScript.

## Description

This project is a functional task management app that allows users to create, organize, and track daily tasks. It focuses on clean state management in JavaScript, keeping the user interface synced with an underlying tasks array, and preserving data across browser refreshes using `localStorage`.

## Features

- **Add & Delete Tasks:** Quickly create new tasks or remove completed ones.
- **Priority Levels:** Assign Low, Medium, or High priority to tasks.
- **Filter Tasks:** View tasks by status (`All`, `Pending`, or `Completed`).
- **Persistent Data:** Tasks stay saved in the browser using `localStorage`.
- **Input Sanitization:** Basic XSS protection to handle special characters safely.

## Project Files

- `index.html` – Structure and layout of the application.
- `style.css` – Styling, layout rules, and visual feedback.
- `app.js` – Core logic, state management, event handling, and DOM rendering.

## How to Run

1. Clone this repository or download the source code.
2. Open `index.html` in any modern web browser.