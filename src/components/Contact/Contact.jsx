import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/message.png")} alt="E-mail Icon" />
                <a href="mailto:jovepedro@gmail.com">jovepedro@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedin.png")} alt="Linkedin Icon" />
                <a href="https://www.linkedin.com/in/joaoveasey/">linkedin.com/joaoveasey</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/github.png")} alt="Github Icon" />
                <a href="https://github.com/joaoveasey">github.com/joaoveasey</a>
            </li>
        </ul>
    </footer>
  )
}