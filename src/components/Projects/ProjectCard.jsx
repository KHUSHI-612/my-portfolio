import React from "react";
import rps from '../../../assets/Projects/rock paper.png';
import memorycard from '../../../assets/Projects/memorycard.png';
import styles from "./ProjectCard.module.css";

const imageMap = {
    rps,
    memorycard

  };

 export const ProjectCard = ({project: {title,image,description,skills,demo,source}}) => {
  return (
    <div className={styles.container}>
    <img src={imageMap[image]} alt={title} className={styles.images}/>
    <h3 className={styles.title }>{title}</h3>
    <p className={styles.description }>{description}</p>
    <ul className={styles.skills }>{skills.map((skill,id)=>{
        return (<li key={id} className={styles.skill }>{skill}</li>);
    })}
    </ul>
    <div className={styles.links}>
        <a href={demo} className={styles.link}>Demo</a>
        <a href={source} className={styles.link }>Source</a>
    </div>
</div>
  )
}

