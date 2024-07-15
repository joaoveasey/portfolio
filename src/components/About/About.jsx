import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
                src={getImageUrl("about/aboutImage.png")} 
                alt="boy with laptop"
                className={styles.aboutImage} 
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    
                    <div className={styles.aboutItemText}>
                        <p>My name is João Veasey Pedro, I'm 19 years old and I live in Matão, SP.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    
                    <div className={styles.aboutItemText}>
                        <p>Studying the 4th semester of Multiplataform Software Development.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    
                    <div className={styles.aboutItemText}>
                        <p>I do an IT internship at the company  <a href='https://supley.com.br'>Supley</a>, it is an environment where I can receive feedback and learn new concepts and skills.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                   
                    <div className={styles.aboutItemText}>
                        <p>I am currently studying to be a Full Stack Developer.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}