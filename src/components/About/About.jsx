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
                    <img src={getImageUrl("about/lastIcon.png")} alt="lastIcon" />
                    <div className={styles.aboutItemText}>
                        <h3>Estágio em TI</h3>
                        <p>Faço estágio na empresa <a href="https://supley.com.br">Supley</a>, onde tenho a oportunidade de conhecer 
                        mais sobre o ambiente de trabalho. (Out, 2023 - Presente)</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursorIcon" />
                    <div className={styles.aboutItemText}>
                        <h3>Desenvolvimento Front-end</h3>
                        <p>No front-end tive contato com HTML, CSS e Javascript, 
                        além do framework React para interfaces dinâmicas e responsivas.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="cursorIcon" />
                    <div className={styles.aboutItemText}>
                        <h3>Desenvolvimento Back-end</h3>
                        <p>Estudo e aplico a linguagem C# no desenvolvimento back-end, 
                            trabalhando com bancos de dados relacionais (SQL) e APIs REST.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}