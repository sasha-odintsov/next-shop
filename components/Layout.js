import Link from "next/link";
import styles from '../styles/Navbar.module.css';
import Head from "next/head";

export default function Layout({ children }) {
  return(
  <>
  <Head>
    <meta keywords={"nextjs, shop"}></meta>
    <meta content="Internet shop"></meta>
    <title>Next Shop</title>
  </Head>
  <div 
  // className={styles.navbar}
  className="px-10 md:px-20 py-7 bg-slate-300 flex items-center"
  >
    <span className="uppercase font-bold text-slate-700">next shop</span>
    <ul className="text-slate-600 flex uppercase">
      <li className="px-10">
      |
      </li>
      <li>
        <Link 
          href="/" 
          // className={styles.navbarLink}
          className="text-sm mr-5 hover:text-white"
        >
        Main
        </Link>
      </li>
      <li>
        <Link 
          href="/products" 
          // className={styles.navbarLink}
          className="text-sm hover:text-white"
        >
        Products
        </Link>
      </li>
    </ul>
  </div>
  <div className="px-10 md:px-20 my-10">
    {children}
  </div>
  </>
  )
}