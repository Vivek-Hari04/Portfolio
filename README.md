# Portfolio Website

A modern, responsive portfolio website showcasing my projects, technical skills, and professional background. Built with React and featuring a beautiful dark/light mode toggle.

## 🌐 Live URL

**Live Demo:** [https://vivekhari.vercel.app/](https://vivekhari.vercel.app/)

## 📋 Project Description

This is a personal portfolio website that presents my work as a Computer Engineering student. The site features:

- **Profile Section**: Introduction with profile picture and call-to-action buttons
- **Technical Skills**: Infinite scrolling carousel displaying technologies I work with
- **About Me**: Personal description and inspirational quote
- **Featured Projects**: Interactive carousel showcasing my recent projects (Slotify, Linguly, Jobseekr)
- **Contact Section**: Links to email, LinkedIn, and GitHub

### Key Features

- ✨ **Dark/Light Mode Toggle**: Seamless theme switching with persistent preferences
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- 🎨 **Modern UI/UX**: Clean, minimalist design with smooth animations
- ⚡ **Fast Performance**: Built with Vite for optimal loading times
- 🎯 **Smooth Navigation**: Sticky header with smooth scrolling to sections

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - UI library
- **Vite 7.3.1** - Build tool and dev server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **@tailwindcss/vite** - Tailwind CSS Vite plugin

### Key Technologies
- **JavaScript/JSX** - Programming language
- **CSS3** - Styling
- **HTML5** - Markup

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header with dark mode toggle
│   │   ├── Profile.jsx          # Profile section with image and intro
│   │   ├── TechnicalSkills.jsx # Skills carousel
│   │   ├── About.jsx            # About me section
│   │   ├── Cardcarousel.jsx     # Featured projects carousel
│   │   └── Contact.jsx          # Contact section with social links
│   ├── contexts/
│   │   └── DarkModeContext.jsx  # Dark mode state management
│   ├── assets/
│   │   └── Pic.png             # Profile picture
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
├── public/
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🎨 Features in Detail

### Dark Mode
- Persistent theme preference using localStorage
- Smooth transitions between themes
- Context-based state management
- Toggle button in header (moon/sun icon)

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile navigation
- Responsive typography and spacing
- Touch-friendly interactive elements

### Project Showcase
- Interactive carousel with navigation arrows
- Project cards with images, descriptions, and tech tags
- Direct links to GitHub repositories and live demos
- Pagination dots with slide counter

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Vivek Hari**
- GitHub: [@Vivek-Hari04](https://github.com/Vivek-Hari04)
- LinkedIn: [vivek-hari-a444a5327](https://www.linkedin.com/in/vivek-hari-a444a5327)
- Email: vivekhari123456@gmail.com

---

Built with ❤️ using React and Tailwind CSS
