import React from 'react'
import { getImageUrl } from "../../utils"
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello, I'm João</h1>

            <p className={styles.description}>
              Software Development Student
            </p>
            <a href="https://api.whatsapp.com/send?phone=55016999750675" className={styles.contactBtn}>
              Contact Me
            </a>
        </div>
        <img 
          src={getImageUrl("hero/heroImage.png")} 
          alt="My Image" 
          className={styles.heroImg}
        />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
