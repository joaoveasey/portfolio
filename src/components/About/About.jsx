import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>Sobre</h2>
        <div className={styles.content}>
            <img 
                src={getImageUrl("about/aboutImage.png")} 
                alt="Menino com notebook"
                className={styles.aboutImage} 
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursorIcon" />
                    <div className={styles.aboutItemText}>
                        <h3>Desenvolvimento Front-end</h3>
                        <p>No front-end tive contato com HTML, CSS e Javascript, 
                        além do framework React.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="cursorIcon" />
                    <div className={styles.aboutItemText}>
                        <h3>Desenvolvimento Back-end</h3>
                        <p>No back-end, estudo a linguagem C#, Banco de Dados Relacionais (SQL)
                        e API Rest.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/lastIcon.png")} alt="lastIcon" />
                    <div className={styles.aboutItemText}>
                        <h3>Metodologias Ágeis</h3>
                        <p>Conheço metodologias ágeis que facilitam o desenvolvimento, 
                        como o Scrum e o Kanban.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}