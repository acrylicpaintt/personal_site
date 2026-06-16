
import { NavigationMenu } from "radix-ui";
import { Flex, Theme } from '@radix-ui/themes';
import "../globals.css";


const Header = () => {
	return (
    <Flex direction="column" gap="2">
		<Theme>
		<NavigationMenu.Root className="NavigationMenuRoot" orientation="vertical">
			<NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Link
						className="NavigationMenuLink"
						href="/"
					>
						Home
					</NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
						className="NavigationMenuLink"
						href="/projects"
					>
						Projects
					</NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
						className="NavigationMenuLink"
						href="/funfacts"
					>
						Fun Facts
					</NavigationMenu.Link>
        </NavigationMenu.Item>

          <NavigationMenu.Item>
          <NavigationMenu.Link
						className="HeaderButton"
						href="/contactme"
					>
						Contact Me!
					</NavigationMenu.Link>
        </NavigationMenu.Item>
        
			</NavigationMenu.List>

			<NavigationMenu.Viewport />
		</NavigationMenu.Root>
    </Theme></Flex>
	);
};


export default Header;