
import { NavigationMenu } from "radix-ui";
import { Theme } from '@radix-ui/themes';
import "../globals.css";

const Footer = () => {
   return (
    <footer>
        <Theme>
            <NavigationMenu.Root className="NavigationMenuRoot" orientation="vertical">
                <NavigationMenu.List className="NavigationMenuList">
                    <NavigationMenu.Item >
                    Made by Alicia Yoon
                    </NavigationMenu.Item>
                </NavigationMenu.List>
                <NavigationMenu.Viewport />
            </NavigationMenu.Root>
            
        </Theme>
    </footer>
    );
}


export default Footer;

