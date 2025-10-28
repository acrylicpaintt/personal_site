
import { NavigationMenu } from "radix-ui";
import { Flex, Theme } from '@radix-ui/themes';
import "./globals.css";



const Footer = () => {
   return (
    <Flex direction="column" gap="2">
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
    </Flex>
    );
}


export default Footer;

