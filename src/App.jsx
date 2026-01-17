import { DarkModeProvider } from './contexts/DarkModeContext.jsx'
import Header from './components/Header.jsx'
import Profile from './components/Profile.jsx'
import TechnicalSkills from './components/TechnicalSkills.jsx'
import About from './components/About.jsx'
import Cardcarousel from './components/Cardcarousel.jsx'
import Contact from './components/Contact.jsx'
//portfolio page for Vivek Hari
function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <Header />
        <Profile />
        <TechnicalSkills />
        <About />
        <Cardcarousel />
        <Contact />
      </div>
    </DarkModeProvider>
  )   
}

export default App
