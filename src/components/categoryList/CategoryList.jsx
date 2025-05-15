import React from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
// import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>All</Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>Cat1</Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>Cat2</Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>Cat3</Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>Cat4</Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>Cat5</Link>
      </div>
    </div>
  )
}
export default CategoryList