import React from 'react'
import Link from 'next/link'
import styles from "./navbar.module.css"
import Image from 'next/image'
import AuthLinks from '../authLinks/authLinks'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.social}>
            <Image src="/facebook.png" alt='facebook' width={24} height={24}/>
            <Image src="/instagram.png" alt='instagram' width={24} height={24}/>
            <Image src="/tiktok.png" alt='tiktok' width={24} height={24}/>
        </div>
        <div className={styles.logo}>Publications</div>
        <div className={styles.links}>
          <AuthLinks/>
        </div>
    </div>
  )
}

export default Navbar
