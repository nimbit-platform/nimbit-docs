import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

// Bilder aus static/img/ importieren
import DeveloperImg from '@site/static/img/developer.png';
import ApiDocsImg from '@site/static/img/api-docs.png';
import UserManualImg from '@site/static/img/user-manual.png';

// Style-Definitionen für das Layout
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center' as const,
  marginTop: '40px',
  padding: '0 20px',
};

const gridContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  maxWidth: '1200px',
  width: '100%',
  flexWrap: 'wrap' as const, // Sorgt für responsives Verhalten
};

const cardStyle = {
  position: 'relative' as const,
  borderRadius: '8px',
  overflow: 'hidden',
  backgroundColor: '#fff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: '0.3s',
  textDecoration: 'none',
  color: 'inherit',
  width: '350px',
};

const cardHoverStyle = {
  transform: 'scale(1.03)',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
};

const imageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover' as const,
};

const textContainerStyle = {
  padding: '20px',
  textAlign: 'left' as const,
};

const labelStyle = {
  position: 'absolute' as const,
  top: '10px',
  right: '10px',
  backgroundColor: '#0366d6', // Blau für "Developers" & "Business Users"
  color: 'white',
  padding: '5px 10px',
  borderRadius: '5px',
  fontSize: '0.8rem',
  fontWeight: 'bold' as const,
};

export default function Home() {
  return (
    <Layout title="NimBit Documentation" description="Find all guides and resources for NimBit">
      <main style={containerStyle}>
        <div style={gridContainerStyle}>
          {/* User Manual (jetzt an erster Stelle, links) */}
          <Link 
            to="/docs/user-manual/overview" 
            style={{ ...cardStyle }} 
            onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
            onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
          >
            <div style={labelStyle}>Business Users</div>
            <img src={UserManualImg} alt="User Manual" style={imageStyle} />
            <div style={textContainerStyle}>
              <h2>User Manual →</h2>
              <p>The user manual provides step-by-step instructions for end-users to navigate and utilize NimBit's features.</p>
            </div>
          </Link>

          {/* Developer Documentation */}
          <Link 
            to="/docs/developer-documentation/dev-overview" 
            style={{ ...cardStyle }} 
            onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
            onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
          >
            <div style={labelStyle}>Developers</div>
            <img src={DeveloperImg} alt="Developer Documentation" style={imageStyle} />
            <div style={textContainerStyle}>
              <h2>Developer Documentation →</h2>
              <p>A comprehensive guide for developers, detailing software architecture, API usage, and code examples.</p>
            </div>
          </Link>

          {/* API Documentation */}
          <Link 
            to="/docs/developer-documentation/api-documentation/dev-api-intro" 
            style={{ ...cardStyle }} 
            onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
            onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
          >
            <div style={labelStyle}>Developers</div>
            <img src={ApiDocsImg} alt="API Documentation" style={imageStyle} />
            <div style={textContainerStyle}>
              <h2>API Documentation →</h2>
              <p>Learn how to execute common tasks through NimBit’s API.</p>
            </div>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
