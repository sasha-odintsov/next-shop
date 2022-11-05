import Link from "next/link";
import styles from '../styles/Navbar.module.css';
import Head from "next/head";

export default function MainConteiner({children, title, keywords}) {
  return(
  <>
  <Head>
    <meta keywords={"nextjs, shop, " + keywords}></meta>
    <meta content="Internet shop"></meta>
    <title>{title}</title>
  </Head>
  <div className={styles.navbar}>
    <Link href="/" className={styles.navbarLink}>
      Main
    </Link>
    <Link href="/products" className={styles.navbarLink}>
      Products
    </Link>
  </div>
  <div style={{margin: '20px 40px'}}>
    {children}
  </div>
  </>
  )
}