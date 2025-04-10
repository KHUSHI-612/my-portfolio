import React from 'react';
import skills from '../../data/skills.json';
import history from "../../data/history.json";
import html from '../../../assets/skills/html.png';
import css from '../../../assets/skills/css.png';
import react from '../../../assets/skills/react.png';
import figma from '../../../assets/skills/figma.png';
import javascript from '../../../assets/skills/javascript.png';
import python from '../../../assets/skills/python.png';
import styles from "./Education.module.css";


const imageMap = {
    html,
    css,
    react,
    figma,
    javascript,
    python

  };
  


export const Education = () => {
  return (
    <section id="education" className={styles.container}>
     <h2 className={styles.title}>Skills & Education</h2>
     <div className={styles.content}>
     <div className={styles.skills}>
        {skills.map((skill, id) => (
          <div key={id} className={styles.skill}>
            <div className={styles.skillImageConatiner}>
            <img src={imageMap[skill.image]} alt={skills.title} />
            </div>
            <p>{skill.title}</p>
            
          </div>
        ))}
      </div>
        <ul className={styles.history}>
            {
                history.map((historyItem,id)=>{return(
                    <li key={id} className={styles.historyItem}>
                        <div className={styles.historyItemDetails}>
                            <h3>{` ${historyItem.organisation}`}</h3>
                            <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                            <ul>
                                {historyItem.class.map((classes,id)=>{
                                    return <li key={id}>{classes}</li>
                                })}
                            </ul>

                        </div>

                    </li>
                )
                  
                })
            }
        </ul>
     </div>
    </section>
  )
}
