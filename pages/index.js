import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>API Testing Platform</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to our API Testing Platform!</h1>

        <p className={styles.description}>
          This platform is dedicated solely to API testing, full-stack testing,
          Git pulling, and networking.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>API Testing &rarr;</h3>
            <p>Conduct rigorous API testing to ensure optimal performance.</p>
          </div>

          <div className={styles.card}>
            <h3>Full-Stack Testing &rarr;</h3>
            <p>
              Perform comprehensive full-stack testing for robust applications.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Git Pulling &rarr;</h3>
            <p>
              Utilize Git pulling for efficient code versioning and team
              collaboration.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Networking &rarr;</h3>
            <p>
              Understand and implement effective networking for your
              applications.
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </p>
      </footer>
    </div>
  );
}
