# Animated Developer Portfolio

A modern, animated developer portfolio built with React, Vite, Tailwind CSS, Three.js, Framer Motion, and GSAP. This project showcases your skills, projects, and contact info with beautiful 3D and motion effects. **Contact form is for demo only (no backend/email sending).**

---

## ✨ Features
- **Modern UI**: Responsive, clean, and visually appealing
- **3D Animated Backgrounds**: Built with Three.js and @react-three/fiber/drei
- **Smooth Animations**: Framer Motion and GSAP for transitions and effects
- **Tailwind CSS**: Utility-first styling for rapid development
- **Section Highlights**: About, Skills, Projects, and Contact
- **Iconography**: Lucide React for crisp SVG icons
- **Ready for Netlify Deployment**

---

## 🛠️ Main Libraries Used
- [React](https://react.dev/) — UI components
- [Vite](https://vitejs.dev/) — Fast dev/build tool
- [Tailwind CSS](https://tailwindcss.com/) — Utility CSS
- [Three.js](https://threejs.org/) & [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) — 3D graphics
- [@react-three/drei](https://github.com/pmndrs/drei) — 3D helpers
- [Framer Motion](https://www.framer.com/motion/) — Animations
- [GSAP](https://gsap.com/) — Advanced animation
- [Lucide React](https://lucide.dev/) — SVG icons

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone <repo-url>
cd "portfolio final"
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🖥️ Project Structure
```
src/
  components/      # All React components (Hero, Navigation, AboutSection, Contact, etc)
  constants/       # Static data/constants
  index.css        # Tailwind and custom styles
  App.jsx          # Main app entry
  main.jsx         # React/Vite entry point
```

---

## 🎨 Animations & Effects
- **Hero Section**: 3D animated background with floating shapes and stars
- **Section Transitions**: Smooth fade/slide using Framer Motion
- **Animated Navigation**: Responsive, animated mobile/desktop nav
- **About/Skills/Projects**: Animated cards, progress bars, and feature highlights
- **GSAP**: Used for advanced scroll and timeline animations

---

## 📝 Customization
- Update your info, images, and content in the `components/` and `constants/` folders.
- Change theme colors in `tailwind.config.js` and `index.css`.
- Add or remove sections as needed.

---

## 📬 Contact Form
- The contact form is for demo/UI purposes only. **No backend or email sending is configured.**
- To enable real email sending, integrate a service like EmailJS, Formspree, or your own backend.

---

## 🌍 Deploying to Netlify
1. Push your code to GitHub (or any git provider).
2. Go to [Netlify](https://netlify.com/) and click "New site from Git".
3. Connect your repository.
4. Set the build command to:
   ```
   npm run build
   ```
   and the publish directory to:
   ```
   dist
   ```
5. Click "Deploy site".

---

## 🎬 How to Install and Use Animations

This project uses several animation libraries. All are installed automatically with `npm install`, but here are the individual commands and usage notes:

### Install Animation Libraries
```bash
npm install framer-motion gsap three @react-three/fiber @react-three/drei
```

### Usage in the Project
- **Framer Motion**: For animating React components (e.g., section transitions, navigation, buttons)
  - Usage: `import { motion } from 'framer-motion'`
- **GSAP**: For advanced timeline and scroll-based animations
  - Usage: `import gsap from 'gsap'`
- **Three.js, @react-three/fiber, @react-three/drei**: For 3D backgrounds, floating shapes, and stars
  - Usage: `import { Canvas } from '@react-three/fiber'`
  - Usage: `import { Stars } from '@react-three/drei'`

All animation code is already set up in the components. You can customize or add new animations by editing the relevant components in `src/components/`.

---

## ℹ️ Notes
- All animations and 3D effects are for visual showcase and learning purposes.
- This project is a great starting point for your own animated portfolio or landing page.

---

## 📄 License
MIT
