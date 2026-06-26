"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import themes from "./community-themes.json";
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState(themes[0]);

    useEffect(() => {
      const saved = Cookies.get('id');
      if (saved) setTheme(JSON.parse(saved));
    }, []);

    useEffect(() => {
      Cookies.set('id', JSON.stringify(theme));
    }, [theme]);
  return (
    <html lang="en">
      <body style={{
      '--color-background': theme.background,
      '--color-button': theme.button,
      '--color-text': theme.text,
      } as React.CSSProperties}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
