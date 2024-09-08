import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './Components/Header/Header.tsx'
import { Intro } from './Components/Intro/Intro.tsx'
import { AboutMe } from './Components/AboutMe/AboutMe.tsx'
import { Footer } from './Components/Footer/Footer.tsx'
import './index.css'
import { ProjectList } from './Components/ProjectsConteiner/ProjectLista.tsx'
import { ExperienceConteiner } from './Components/XPConteiner/experience.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <Intro/>
    <AboutMe/>
    <ProjectList/>
    <ExperienceConteiner/>
    <Footer/>
  </StrictMode>,
)
