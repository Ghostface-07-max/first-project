// app/layout.tsx
import React, { ReactNode } from 'react';
import './globals.css'; // Import global styles
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <Head>
          <title>My Next.js App</title>
          <meta name="description" content="A simple Next.js app with TypeScript" />
        </Head>
      </head>
      <body>
        <header className="header">
          <nav>
            <ul className="nav-list">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <p>© 2024 My Next.js App</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
