import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"
import hero from "../../../assets/hero/hero.jpeg";
export const Hero=()=>{
    return <section className={styles.container}>
        <div className={styles.content}><h1 className={styles.title}>Hi,Im Khushi Batra</h1>
        <p className={styles.description}>Aspiring web developer and AI enthusiast, committed to building innovative, user-friendly digital solutions</p>
        <a href="mailto:Khushibatra306@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={hero} alt="hero-image" className={styles.heroImg}></img>
        <div className={styles.topBlur}/>
        <div className={styles.botttomBlur}/>

    </section>
}