import React from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'

const AuthLinks = () => {
  // Temporary
  const status = "notauthenticated"
  return (
    <>
      {status === "notauthenticated" ? ( 
        <Link href="/">Login</Link>
      ) : ( 
        <>
          <Link href="/write">Write</Link>
          <span>Logout</span>
        </>
      )}
    </>
  )
}

export default AuthLinks