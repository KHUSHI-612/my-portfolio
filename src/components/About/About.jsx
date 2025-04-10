import React from "react";
import styles from "./About.module.css"
import cursor from "../../../assets/about/cursorIcon.png";
import me from "../../../assets/about/khushi.jpeg";
import server from "../../../assets/about/serverIcon.png";
import uilcon from "../../../assets/about/uiIcon.png";

export const About=()=>{
    return(<section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}><img src={me} alt="me " className={styles.aboutimage}/>
        <ul className={styles.aboutitems}>
            <li className={styles.aboutitem}><img src={cursor} alt="cursor"/>
            <div className={styles.aboutitemstext}>
                <h3>Frontend Developer</h3>
                <p>Passionate about crafting sleek, interactive websites with clean code and great user experiences. </p>
            </div>
            </li>

        <li className={styles.aboutitem}><img src={server} alt="server"/>
        <div className={styles.aboutitemstext}>
                <h3>Backend Developer</h3>
                <p>Skilled in Python and actively learning Data Structures and Algorithms to enhance problem-solving abilities. </p>
            </div>
        </li>
        <li className={styles.aboutitem}><img src={uilcon} alt="uilcon"/>
        <div className={styles.aboutitemstext}>
                <h3>Others</h3>
                
  <li>Participated in Smart India Hackathon (SIH).</li>
  <li>Finalist in college-level Ideathon competition.</li>
  <li>Core committee member of the college Astrophysics Club.</li>

            </div>
        </li>
        </ul>
        </div>
    </section>
         
    )
}