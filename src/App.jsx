
import styles from'./App.module.css';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './components/About/About';
import {Education} from "./components/EDUCATION/Education.jsx";
import {Projects} from "./components/Projects/Projects"
import { Contact} from "./components/Contact/Contact.jsx"


function App() {
 

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Projects/>
      <Contact/>

    </div>
  )
}

export default App;
