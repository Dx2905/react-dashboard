# 📊 React Frontend Dashboard

A fully responsive **Admin Dashboard UI** built with React, Vite, Tailwind CSS, and Axios — featuring **JWT authentication**, **protected routes**, **API integration**, **toast notifications**, **error boundaries**, and **Vercel deployment**.

> Live Demo: [https://your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)  
> *(Replace with your actual link)*

---

## 🚀 Features

- ✅ **JWT-based Auth** (localStorage token, login/logout)
- ✅ **Protected Routes** (via React Context + wrapper)
- ✅ **Axios REST Integration** (with Authorization header)
- ✅ **Sidebar Navigation** (responsive, mobile-first)
- ✅ **React Router DOM** (routing setup for `/`, `/dashboard`, `/profile`)
- ✅ **Toast Notifications** (login/logout feedback via `react-hot-toast`)
- ✅ **Error Boundary** (friendly error fallback on UI crashes)
- ✅ **Loading States** (animated loader while fetching)
- ✅ **CI/CD with Vercel** (auto-deploy on push)

---

## 🛠️ Tech Stack

| Frontend | Tool |
|----------|------|
| React 18 | ⚛️ UI framework |
| Vite     | ⚡ Build tool |
| Tailwind CSS | 🎨 Utility-first CSS |
| React Router DOM | 🔀 Routing |
| Axios    | 🔌 API calls |
| React Context | 🔐 Auth state |
| React Hot Toast | 🔔 Notifications |
| Vercel   | 🚀 Hosting & CI/CD |

---

## 🧪 Screenshots

> _(Add screenshots here)_  
> e.g. `/dashboard`, `/profile`, mobile sidebar toggle, toast messages

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── Layout.jsx
│   ├── Sidebar.jsx
│   ├── ProtectedRoute.jsx
│   └── ErrorBoundary.jsx
├── context/
│   └── AuthContext.jsx
├── pages/
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   └── Profile.jsx
├── services/
│   └── api.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚦 Getting Started

### 📦 Clone the repo

```bash
git clone https://github.com/your-username/react-dashboard.git
cd react-dashboard
npm install
```

### 🧪 Run locally

```bash
npm run dev
```

### 🛠 Build for production

```bash
npm run build
```

---

## 🔐 Simulated Auth

- Login sets a fake JWT token (`1234567890`) in localStorage
- Token is auto-attached to API requests via Axios interceptor
- Protected routes check for token and redirect if missing
- Logout clears the token and redirects to `/`

---

## 📦 API Used

Dummy data comes from:

```
https://jsonplaceholder.typicode.com/posts?_limit=5
```

You can easily swap this out for your own backend.

---

## 🌐 Deployment

This project is auto-deployed using **Vercel**.

### CI/CD Setup

- Every `git push` to `main` triggers a redeploy
- Build: `npm run build`
- Output: `dist`

---

## 🙌 Author

Made with ❤️ by **Gaurav**  
[LinkedIn](https://www.linkedin.com/in/fnu-gaurav-653355252/) • [GitHub](https://github.com/your-username)

---

## 📄 License

MIT – free to use, reuse, and build upon.
