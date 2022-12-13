import Image from 'next/image'
import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <NavBar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
