import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="lama blog" width={50} height={50} />
          <h1 className={styles.logoText}>Archepleagic</h1>
        </div>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p>
        <div className={styles.icons}>
            <Image src="/instagram.png" alt='instagram' width={24} height={24}/>
            <Image src="/linkedin.svg" alt='linkedin' width={24} height={24}/>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Instagram</Link>
          <Link href="/">Linkedin</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;