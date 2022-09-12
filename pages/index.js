import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    <main className={styles.main}>
      <Link href="/products">
        <a>Products</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </main>
  )
}
