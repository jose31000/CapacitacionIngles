// Next.js Sample Code with Corrected Comments

import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

// A functional component that renders the Home Page
// This component is used to create a homepage
export default function Home() {
  return (
    <div className={styles.container}>
      {/* Add a meta tag for SEO */}
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="A Next.js application example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Display the main content of the page */}
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">My Next.js App!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>

        {/* Render the main content */}
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2 className={styles.cardTitle}>Documentation &rarr;</h2>
            <p className={styles.cardDescription}>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2 className={styles.cardTitle}>Learn &rarr;</h2>
            <p className={styles.cardDescription}>
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/canary/examples" className={styles.card}>
            <h2 className={styles.cardTitle}>Examples &rarr;</h2>
            <p className={styles.cardDescription}>
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a href="https://vercel.com/new" className={styles.card}>
            <h2 className={styles.cardTitle}>Deploy &rarr;</h2>
            <p className={styles.cardDescription}>
              Deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      {/* Add a footer to the page */}
      <footer className={styles.footer}>
        <p>Powered by <a href="https://vercel.com">Vercel</a></p>
      </footer>
    </div>
  );
}
