"use client"
import { useState } from "react";
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
 
import {
  Command,
  CommandInput,
} from "@/components/ui/command"

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { LogoIcon } from "./Icons";
import CompanyLogo from "../assets/comIcon.png";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#",
    label: "Tools and Dashboard",
  },
  {
    href: "#",
    label: "Services",
  },
  {
    href: "#",
    label: "Community",
  },
  {
    href: "#",
    label: "About",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <img src={CompanyLogo.src} alt="Company Logo" className="ml-2" style={{ width: '199px', height: '65px' }} />
            </a>
          </NavigationMenuItem>
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
          <Command className="rounded-lg border shadow-md md:min-w-[350px]">
          <CommandInput placeholder="Type a command or search..." />
          </Command>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
    </>
  );
};
