import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>Sobre Mim</h2>
        <div className={styles.content}>
            <img 
                src={getImageUrl("about/aboutImage.png")} 
                alt="Menino com notebook"
                className={styles.aboutImage} 
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/historia.png")} alt="Folha de Papel" />
                    <div className={styles.aboutItemText}>
                        {/* <h3>Sobre mim</h3> */}
                        <p>Meu nome é João Veasey Pedro, tenho 19 anos e moro em Matão-SP. Comecei a estudar programação em 2022. Desde então, tenho investido continuamente em novos conhecimentos na área.</p>

                    </div>
                </li>
                {/* <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursorIcon" />
                    <div className={styles.aboutItemText}>
                        <h3></h3>
                        <p></p>
                    </div>
                </li> */}
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/lastIcon.png")} alt="lastIcon" />
                    <div className={styles.aboutItemText}>
                        {/* <h3>Estágio em TI</h3> */}
                        <p>Atualmente, estou estagiando na empresa <a href="https://supley.com.br">Supley</a>. Esta experiência vem me permitindo conhecer como funciona o ambiente de trabalho e ver na prática os conhecimentos adquiridos na faculdade e cursos especializados.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}