import Head from 'next/head'
import Image from 'next/image'
import LiveCamera from '../components/camera'
import LiveLocation from '../components/location'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Camera & Location</h1>
        <div style={{ display: 'flex', gap: 20 }}>
          <div className={styles.camera}>
            <LiveCamera />
          </div>
          <div className={styles.location}>
            <LiveLocation />
          </div>
        </div>
      </main>
    </div>
  )
}
