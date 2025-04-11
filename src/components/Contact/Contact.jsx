import React from 'react';
import styles from "./Contact.module.css";
import email from "../../../assets/contact/emailIcon.png";
import github from "../../../assets/contact/githubIcon.png";
import ln from "../../../assets/contact/linkedinIcon.png";

export const Contact = () => {
  return (
  <footer id="contact" className={styles.continer}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={email} alt="emial"/>
            <a href="mailto:Khushibatra306@gmail.com">CONNECT ON MAIL</a>
        </li>
        <li className={styles.link}>
            <img src={ln} alt="linkdin"/>
            <a href="https://www.linkedin.com/in/khushi-batra-14a114324/">CONNECT ON LINKDIN</a>

        </li>
        <li className={styles.link}>
            <img src={github} alt="github"/>
            <a href="https://github.com/KHUSHI-612">
            CONNECT ON GITHUB
            </a>
        </li>
    </ul>
  </footer>
  )
}
