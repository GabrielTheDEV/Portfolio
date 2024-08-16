import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './Components/Header/Header.tsx'
import { Intro } from './Components/Intro/Intro.tsx'
import { AboutMe } from './Components/AboutMe/AboutMe.tsx'
import { Footer } from './Components/Footer/Footer.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <Intro/>
    <AboutMe/>
    {/* habilidades */}
    {/* projetos */}
    <Footer/>
  </StrictMode>,
)
