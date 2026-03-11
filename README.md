# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

# 🏗️ Construction DPR Manager

A **Frontend Web Application** built with **React.js** to manage construction projects and submit **Daily Progress Reports (DPR)**.  
Created for a **Frontend Developer Internship Task**, this project demonstrates responsive design, routing, and form handling.

---

## 🛠️ Tech Stack

- **Framework:** React.js (v18+)  
- **Routing:** React Router v6  
- **State Management:** useState, useContext  
- **Styling:** CSS (component-level)  
- **HTTP Client:** Axios / Fetch (mock data)  
- **Build Tool:** Vite  

---

## 📂 Project Structure


---

## 🚀 Features

### 🔑 Login Page
- Email and password input  
- Mock authentication: `test@test.com / 123456`  
- Error message on failed login  
- Redirects to **Project List** on success  

### 📋 Project List
- Displays **3–5 projects** (mock data)  
- Shows **Name, Status, Start Date, Location**  
- Status badges with colors for `Ongoing` / `Completed`  
- Button to open **DPR Form**  

### 📝 DPR Form
- Displays selected project details  
- Fields: **Date, Weather (dropdown), Work Description, Worker Count**  
- Upload 1–3 photos  
- Submit button with validation and success alert  

### 📱 Responsive Design
- Mobile-first layout (375px)  
- Adapts to **tablet (768px)** and **desktop (1280px+)**  
- No horizontal scroll  

---

## 💻 How to Run Locally

1. Clone the repository

```bash
git clone <your-github-repo-link>
cd construction-dpr-manager
npm install
http://localhost:5173
