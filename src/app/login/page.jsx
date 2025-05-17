'use client'

import React from 'react'
import styles from './loginPage.module.css'
import Image from 'next/image'

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Sign in to your account</h1>
        <p className={styles.subtitle}>Welcome back! Please sign in to continue.</p>

        <button className={styles.socialButton}>
          <Image src="/google-icon.svg" alt="Google" width={20} height={20} />
          <span>Sign in with Google</span>
        </button>

        <button className={styles.socialButtonBlack}>
          <Image src="/facebook-icon.svg" alt="Facebook" width={20} height={20} />
          <span>Sign in with Facebook</span>
        </button>
      </div>
    </div>
  )
}

export default LoginPage
