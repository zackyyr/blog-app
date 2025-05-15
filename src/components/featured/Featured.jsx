import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

 const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Hi! I am Zacky Raechan,</b> The software engineer.
      </h1>

      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt='' fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>This heading is for practice purposes only</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, saepe voluptatum aut impedit iure, distinctio qui,
             inventore consectetur reiciendis quaerat quis sunt deleniti quia minima optio dolor quisquam delectus! Omnis?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
