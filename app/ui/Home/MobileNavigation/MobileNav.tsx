"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { IoMenu } from "react-icons/io5";
import { BsCalendarEvent } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { BiFolderOpen } from "react-icons/bi";
import Link from "next/link";

const navMenuItems = [
  {
    title: "Events",
    path: "/events",
    icon: BsCalendarEvent,
  },
  {
    title: "Executives",
    path: "/executives",
    icon: FaUsers,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: BiFolderOpen,
  },
];

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="rounded-2xl">
          <IoMenu size={22} />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-1/2 max-w-none bg-white p-2">
        <SheetHeader className="flex items-center justify-between mt-12 space-y-0">
          <SheetTitle>AKCSE McGill</SheetTitle>
          <SheetDescription className="text-xs">
            AKCSE YG Chapter Events & Resources
          </SheetDescription>
        </SheetHeader>

        <nav className="mt-6 w-full space-y-2">
          {navMenuItems.map((menu, i) => (
            <SheetClose asChild key={i}>
              <Link href={menu.path} className="block">
                <Button
                  variant="ghost"
                  className="w-full flex items-center gap-2.5 justify-start bg-gray-100"
                >
                  <menu.icon size={15} />
                  {menu.title}
                </Button>
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
