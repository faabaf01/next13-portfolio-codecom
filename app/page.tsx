import Image from 'next/image'
import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
// import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <Main />
      <Timeline />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
