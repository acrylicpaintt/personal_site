
"use client"
import { NavigationMenu } from "radix-ui";
import { Button, Flex, Theme } from '@radix-ui/themes';
import "../globals.css";
import themes from "../community-themes.json";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import { FaLinkedinIn, FaEnvelope, FaGithub } from 'react-icons/fa';

const Header = () => {

	const [theme, setTheme] = useState(themes[0]);

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

		localStorage.setItem('theme', JSON.stringify(theme));
	}, [theme]);

	const pathname = usePathname();


	return (
    <Flex className="Header" direction="column" gap="2">
		<Theme>
		<NavigationMenu.Root className="NavigationMenuRoot" orientation="vertical">
			<NavigationMenu.List className="NavigationMenuList">
				<NavigationMenu.Item>
					<div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
						<a href="https://linkedin.com/in/alicia-chaemin-yoon/" target="_blank"><FaLinkedinIn size={24} /></a>
						<a href="mailto:aliciacyoon@gmail.com" target="_blank" style={{ border: "2px solid black", borderRadius: "8px", padding: "4px" }}><FaEnvelope size={24} /></a>
						<a href="https://github.com/aliciacyoon" target="_blank"><FaGithub size={24} /></a>
					</div>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Link
						className="NavigationMenuLink"
						href="/"
						active={pathname === '/'}
					>
						whoami?
					</NavigationMenu.Link>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
				<NavigationMenu.Link
						className="NavigationMenuLink"
						href="/projects"
						active={pathname === '/projects'}
					>
						projects
					</NavigationMenu.Link>
       			</NavigationMenu.Item>

        		<NavigationMenu.Item>
          			<NavigationMenu.Link
						className="NavigationMenuLink"
						href="/art"
						active={pathname === '/art'}
					>
						art
					</NavigationMenu.Link>
        		</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavigationMenu.Link 
						className="HeaderButton"
						href="/resume.pdf"
  						target="_blank"
						active={pathname === "/resume.pdf"}
						>
					resume
					</NavigationMenu.Link>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<select 
						className="theme-picker"
						value={theme.id} 
						onChange={e => setTheme(themes[e.target.selectedIndex])}>
						{themes.map(t => (
							<option key={t.id}>{t.id}</option>
						))}
					</select>
				</NavigationMenu.Item>
        
			</NavigationMenu.List>
			<NavigationMenu.Viewport />
		</NavigationMenu.Root>
    </Theme></Flex>
	);
};

export default Header;