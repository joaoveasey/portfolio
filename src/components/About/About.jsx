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
    <img src={getImageUrl("about/dsm.png")} alt="dsm icon" />
        <div className={styles.aboutItemText}>
            <p>My name is João Veasey Pedro, I'm 19 years old, and I'm in the 4th semester of Multiplatform Software Development at <a href="https://fatecmatao.edu.br/site-fatec/cursos/desenvolvimento-de-software-multiplataforma/conheca-o-curso/">Fatec Matão</a>.</p>
        </div>
    </li>
    <li className={styles.aboutItem}>
    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
        <div className={styles.aboutItemText}>
            <p>I am passionate about technology and systems development, and I'm eager to apply and grow my skills.</p>
        </div>
    </li>
    <li className={styles.aboutItem}>
    <img src={getImageUrl("about/lastIcon.png")} alt="cursorIcon" />
        <div className={styles.aboutItemText}>
            <p>I am currently interning at <a href="https://supley.com.br">Supley</a>, where I am gaining hands-on experience in technical support, developing new skills, and enhancing my communication abilities.</p>
        </div>
    </li>
    <li className={styles.aboutItem}>
    <img src={getImageUrl("about/serverIcon.png")} alt="cursorIcon" />
        <div className={styles.aboutItemText}>
            <p>I'm working to become a Full Stack Developer, aiming to build efficient solutions and keep advancing in my career.</p>
        </div>
    </li>
</ul>
        </div>
    </section>
  )
}