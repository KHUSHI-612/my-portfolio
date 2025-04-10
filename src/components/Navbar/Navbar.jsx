import React,{useState} from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import menuIcon from "../../../assets/nav/menuIcon.png";
import closeIcon from "../../../assets/nav/closeIcon.png";

export const Navbar=()=>{
    const[menuOpen,setMenuOpen]=useState(false);

    return (
    <nav className={styles.navbar} >
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
            
            <img className={styles.menuBTN} src={menuOpen?closeIcon:menuIcon} alt="menu" 
            onClick={()=>setMenuOpen(!menuOpen)}
            />
            <ul className={ `${styles.menuitems} ${menuOpen && styles.menuOpen}`}
            onClick={()=>setMenuOpen(false)}
            >
            <li>
            <a href="#about">About</a>
            </li>
            <li>
             <a href="#education">Education</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>

            </ul>
        </div>

    </nav>
    )

}