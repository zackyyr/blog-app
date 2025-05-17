import React from 'react'
import Link from 'next/link'
import styles from "./navbar.module.css"
import Image from 'next/image'
import AuthLinks from '../authLinks/authLinks'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.social}>
            <Image src="/instagram.png" alt='instagram' width={24} height={24}/>
            <Image src="/linkedin.svg" alt='linkedin' width={24} height={24}/>
        </div>
        <div className={styles.logo}>Publications</div>
        <div className={styles.links}>
          <AuthLinks/>
        </div>
    </div>
  )
}

export default Navbar
