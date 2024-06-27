import React from 'react'
import { getImageUrl } from "../../utils"
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Oi, sou o João</h1>
            <p className={styles.description}>
              Sou estudante de tecnologia e estou em busca de uma oportunidade para ingressar na 
              área de desenvolvimento de software.
            </p>
            <a href="https://www.linkedin.com/in/joaoveasey/" className={styles.contactBtn}>
              Contato
            </a>
        </div>
        <img 
          src={getImageUrl("hero/heroImage.png")} 
          alt="Minha imagem" 
          className={styles.heroImg}
        />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
