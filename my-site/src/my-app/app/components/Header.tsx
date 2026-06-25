
"use client"
import { NavigationMenu } from "radix-ui";
import { Flex, Theme } from '@radix-ui/themes';
import "../globals.css";
import themes from "../community-themes.json";
import { useState, useEffect } from 'react';

const Header = () => {

	const [theme, setTheme] = useState(themes[0]);

	useEffect(() => {
	const saved = localStorage.getItem('theme');
	if (saved) setTheme(JSON.parse(saved));
	}, []);

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

	return (
    <Flex className="Header" direction="column" gap="2">
		<Theme>
		<NavigationMenu.Root className="NavigationMenuRoot" orientation="vertical">
			<NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Link
						className="NavigationMenuLink"
						href="/"
					>
						whoami?
					</NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
						className="NavigationMenuLink"
						href="/projects"
					>
						projects
					</NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
						className="NavigationMenuLink"
						href="/favs"
					>
						favs
					</NavigationMenu.Link>
        </NavigationMenu.Item>

          <NavigationMenu.Item>
          <NavigationMenu.Link
						className="HeaderButton"
						href="/contactme"
					>
						contact me!
					</NavigationMenu.Link>
        </NavigationMenu.Item>

		<select 
		className="theme-picker"
		value={theme.id} 
		onChange={e => setTheme(themes[e.target.selectedIndex])}>
			{themes.map(t => (
				<option key={t.id}>{t.id}</option>
			))}
			</select>
        
			</NavigationMenu.List>

			<NavigationMenu.Viewport />
		</NavigationMenu.Root>
    </Theme></Flex>
	);
};


export default Header;