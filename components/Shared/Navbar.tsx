"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { SiFoodpanda } from "react-icons/si";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { components } from "@/Constant";

export function Navbar() {
  const [menuImage, setMenuImage] = React.useState("/assets/Images/BG.png");
  const [MenuDetail, setMenuDetail] = React.useState({
    title: "Eco Bazar",
    description: "Fresh & Healthy Organic Food.",
  });
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Popular</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <div className="relative w-full h-full">
                    <Image
                      src={menuImage}
                      alt="navigation image"
                      width={424}
                      height={530}
                      className="w-full h-full"
                    />
                    <a
                      className="flex w-full select-none flex-col justify-end rounded-md  pl-6 pr-6 pb-6 pt-3 no-underline outline-none focus:shadow-md absolute bottom-0 left-0 right-0 bg-gradient-to-b from-muted/20 to-muted p-6 "
                      href="/"
                    >
                      <div className="mb-2 text-lg font-medium text-black">
                        {MenuDetail.title}
                      </div>
                      <p className="text-sm text-black leading-tight ">
                        {MenuDetail.description}
                      </p>
                    </a>
                  </div>
                </NavigationMenuLink>
              </li>
              {/* {title: "Snacks", description: "Crunchy Delights: A Snacker's Paradise"} */}
              <ListItem
                onMouseEnter={() => {
                  setMenuImage("/assets/Images/Snacks.png");
                  setMenuDetail({
                    title: "Snacks",
                    description: "Crunchy Delights: A Snacker's Paradise",
                  });
                }}
                onMouseLeave={() => {
                  setMenuImage("/assets/Images/BG.png");
                  setMenuDetail({
                    title: "Eco Bazar",
                    description: "Fresh & Healthy Organic Food.",
                  });
                }}
                href="/"
                title="Snacks"
              >
                Fresh & Healthy Organic Food.
              </ListItem>
              <ListItem
                onMouseEnter={() => {
                  setMenuImage("/assets/Images/Braverages.png");
                  setMenuDetail({
                    title: "Braverages",
                    description:
                      "Braverages Bar: Where Boldness Meets Beverages",
                  });
                }}
                onMouseLeave={() => {
                  setMenuImage("/assets/Images/BG.png");
                  setMenuDetail({
                    title: "Eco Bazar",
                    description: "Fresh & Healthy Organic Food.",
                  });
                }}
                href="/"
                title="Beverages"
              >
                Braverages Bar: Where Boldness Meets Beverages
              </ListItem>
              <ListItem
                onMouseEnter={() => {
                  setMenuImage("/assets/Images/Bread & Bakery.png");
                  setMenuDetail({
                    title: "Bread & Bakery",
                    description:
                      "Bread Basket Bounty: Freshly Baked Delights Await!",
                  });
                }}
                onMouseLeave={() => setMenuImage("/assets/Images/BG.png")}
                href="/"
                title="Bread & Bakery"
              >
                Bread Basket Bounty: Freshly Baked Delights Await!
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>All Category</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Shop
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
