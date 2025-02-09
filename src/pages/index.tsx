import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="NimBit Documentation" description="The official NimBit documentation hub">
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className={styles.title}>NimBit Documentation</h1>
          <p className={styles.subtitle}>
            Welcome to the NimBit developer hub. You'll find comprehensive guides and documentation to help you start working with NimBit as quickly as possible.
          </p>
        </div>
      </header>
      <main>
        <section className={styles.cardsContainer}>
          <div className={styles.card}>
            <Link to="/docs/developer-documentation/index">
              <div className={styles.cardImage}>
                <img src="/img/developer.png" alt="Developer Documentation" />
                <span className={styles.label}>Developers</span>
              </div>
              <div className={styles.cardContent}>
                <h3>Developer Documentation →</h3>
                <p>A comprehensive guide for developers, covering software architecture, API usage, and code examples.</p>
              </div>
            </Link>
          </div>

          <div className={styles.card}>
            <Link to="/docs/user-manual/index">
              <div className={styles.cardImage}>
                <img src="/img/user-manual.png" alt="User Manual" />
                <span className={styles.label}>Business Users</span>
              </div>
              <div className={styles.cardContent}>
                <h3>User Manual →</h3>
                <p>Step-by-step instructions for end-users to navigate and utilize the software's features.</p>
              </div>
            </Link>
          </div>

          <div className={styles.card}>
            <Link to="/docs/api-documentation/index">
              <div className={styles.cardImage}>
                <img src="/img/api-docs.png" alt="API Documentation" />
                <span className={styles.label}>Developers</span>
              </div>
              <div className={styles.cardContent}>
                <h3>API Documentation →</h3>
                <p>Learn how to execute common tasks through NimBit API.</p>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
