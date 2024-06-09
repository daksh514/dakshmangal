"use client";
import React, { useState } from "react";
import { ModeToggle } from "./ThemeBtn";
import { navLinks } from "@/utils/navLinks";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { Button } from "./ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { X } from "lucide-react";


// import {  Github } from "lucide-react";

function NavBar() {
  const [isSheetOpen, setisSheetOpen] = useState(false);
  return (
    <div className="flex justify-between py-2 items-center  ">
      <div className="max-md:hidden">
        <NavigationMenu>
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.label}>
                <Link href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* MOBILE NAV */}

      <div className="md:hidden">
        <Sheet open={isSheetOpen}>
          
            <Button variant="ghost" size="icon" onClick={()=>setisSheetOpen(true)}>
              <GiHamburgerMenu className="h-[1.2rem] w-[1.2rem]" />
            </Button>

            
          
          <SheetContent className="">
         
            <Button variant={"outline"} className="absolute right-4" onClick={()=>setisSheetOpen(false)}>
              <X className="w-4 h-auto"/>

            </Button>
           
        
              <NavigationMenu className="mx-auto mt-16">
                <NavigationMenuList className="flex flex-col justify-center items-center w-full gap-2 ">
                  {navLinks.map((link) => (
                    <NavigationMenuItem key={link.label} className="w-full text-center" onClick={()=>setisSheetOpen(false)}>
                      <Link href={link.href} legacyBehavior passHref className="w-full text-center" >
                        <NavigationMenuLink className={navigationMenuTriggerStyle() } >
                          {link.label}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex items-center">
        <Button variant="ghost" size="icon">
          <Link href={"https://x.com/DakshuDev"} target="_blank">
            <FaXTwitter className="h-[1.2rem] w-[1.2rem]" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon">
          <Link href={"https://github.com/daksh514"} target="_blank">
            <FaGithub className="h-[1.2rem] w-[1.2rem]" />
          </Link>
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
}
export default NavBar;
