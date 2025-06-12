import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigation } from "@/data/navigation";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "../mobile-nav";
export default function Header() {
  return (
    <header className="flex justify-between px-3 py-2 mx-auto">
      <div>
        <h1 className="sr-only">Sikkabit</h1>
        <Image src="/logo.png" alt="Sikkabit" width={200} height={200}  className="-mt-5"/>
      </div>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          {navigation.map((item) => (
            <NavigationMenuItem key={item.name}>
              <NavigationMenuLink asChild>
                <Link href={item.href}>{item.name}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </header>
  );
}
