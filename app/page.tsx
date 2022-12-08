import Image from 'next/image'
import Main from "./components/Main";
import NavBar from "./components/NavBar";
// import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <NavBar />
      <Main />
    </div>
  );
}
