import React from "react";
import projects from "../../data/Projects.json"
import {ProjectCard} from "./ProjectCard"
import styles from "./Projects.module.css";

export const Projects=()=>{
    return (
    <section className={styles.container} id="projects">
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.Projects}>{
            projects.map((project,id)=>{
                return  <ProjectCard key={id} project={project}/>
            })
}</div>

    </section>
    )
}