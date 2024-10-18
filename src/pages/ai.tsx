import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function AIPage() {
  return (
    <Layout
      title="AI"
      description="Learn more about the AI aspects of NimBit's IoT solution">
      <div className="container">
        <h1>AI Documentation</h1>
        <p>Welcome to the AI section of NimBit's IoT solution documentation.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/ai/forecasting/intro">
            Get Started
          </Link>
        </div>
      </div>
    </Layout>
  );
}
