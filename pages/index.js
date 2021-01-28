import Head from 'next/head'
import styles from '../styles/Home.module.css'
import memeStyles from '../styles/Meme.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          NEXTList
        </h1>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur .
        </p>
        <d className={styles.description}>
          <a href="/about" className={memeStyles.pagelink} >About</a>
          <a href="/jobs" className={memeStyles.pagelink} >Jobs</a>
          <a href="/memes" className={memeStyles.pagelink} >Memes</a>
        </d>
      </main> 
    </div>
  )
}
