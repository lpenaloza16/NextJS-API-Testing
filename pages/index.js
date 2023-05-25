import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>API Testing Page</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the API Testing Page</h1>

        <p className={styles.description}>
          This page is designed for testing purposes.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>API Testing</h3>
            <p>Perform API tests for reliability.</p>
          </div>

          <div className={styles.card}>
            <h3>Full-Stack Testing</h3>
            <p>Carry out full-stack tests for application dependability.</p>
          </div>

          <div className={styles.card}>
            <h3>Git Pulling</h3>
            <p>Use Git pulling for code versioning and collaboration.</p>
          </div>

          <div className={styles.card}>
            <h3>Networking</h3>
            <p>Understand networking for application interaction.</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Created by Leo Pena ⚡️</p>
      </footer>
    </div>
  );
}
