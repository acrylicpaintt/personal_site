
"use client"
import "../globals.css";
import themes from "../community-themes.json";
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import { FaLinkedinIn, FaEnvelope, FaGithub } from 'react-icons/fa';

const Header = () => {

	const [theme, setTheme] = useState(themes[0]);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
	const saved = Cookies.get('theme');
	if (saved) setTheme(JSON.parse(saved));
	}, []);

	useEffect(() => {
	Cookies.set('theme', JSON.stringify(theme));
	}, [theme]);

	useEffect(() => {
		const root = document.documentElement;
		const body = document.body;
		
		root.style.setProperty('--color-background', theme.background);
		root.style.setProperty('--color-button', theme.button);
		root.style.setProperty('--color-text', theme.text);
		
		body.style.setProperty('--color-background', theme.background);
		body.style.setProperty('--color-button', theme.button);
		body.style.setProperty('--color-text', theme.text);
	}, [theme]);

	const pathname = usePathname();

	const dropdownRef = useRef<HTMLDetailsElement>(null);

  return (
    <header className="header">
      <div className="header-social">
        <a href="https://linkedin.com/in/alicia-chaemin-yoon/" target="_blank"><FaLinkedinIn size={20} /></a>
        <a href="mailto:aliciacyoon@gmail.com"><FaEnvelope size={20} /></a>
        <a href="https://github.com/aliciacyoon" target="_blank"><FaGithub size={20} /></a>
      </div>

      <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
        <a href="/" className={pathname === '/' ? 'active' : ''}>whoami?</a>
        <a href="/projects" className={pathname === '/projects' ? 'active' : ''}>projects</a>
        <a href="/art" className={pathname === '/art' ? 'active' : ''}>art</a>
        <a href="/resume.pdf" target="_blank" className="resume-btn">resume</a>
        <details className="drink-dropdown" ref={dropdownRef}>
          <summary className="drink-summary">
            <img src={theme.image} alt={theme.id} className="drink-selected" />
          </summary>
          <div className="drink-options">
            {themes.map(t => (
              <button
                key={t.id}
                className={`drink-btn ${theme.id === t.id ? 'active' : ''}`}
                onClick={() => { setTheme(t); if (dropdownRef.current) dropdownRef.current.open = false; }}
              >
                <img src={t.image} alt={t.id} />
              </button>
            ))}
          </div>
        </details>
      </nav>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </button>
    </header>
  );
};

export default Header;
	