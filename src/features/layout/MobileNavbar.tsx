import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  FolderOpen,
  House,
  Instagram,
  Menu,
  Users,
} from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";

const navMenuItems = [
  {
    title: "Home",
    description: "Get to know our community",
    path: "/",
    icon: House,
  },
  {
    title: "Events",
    description: "Learn, connect, make memories",
    path: "/events",
    icon: CalendarDays,
  },
  {
    title: "Executives",
    description: "Meet the people behind AKCSE",
    path: "/executives",
    icon: Users,
  },
  {
    title: "Projects",
    description: "See what we’re building together",
    path: "/projects",
    icon: FolderOpen,
  },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Release the modal and scroll lock when desktop navigation takes over.
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open navigation menu"
          className="inline-flex size-11 cursor-pointer items-center justify-center rounded-xl border border-orange-100 bg-orange-50 text-orange-700 transition-colors hover:border-orange-200 hover:bg-orange-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700"
        >
          <Menu size={20} aria-hidden="true" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="inset-y-3 right-3 h-[calc(100dvh-1.5rem)] w-[calc(100%-1.5rem)] max-w-[380px] gap-0 overflow-y-auto rounded-2xl border border-gray-100 bg-white p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-gray-800 data-[state=closed]:duration-200 data-[state=open]:duration-200 sm:max-w-[380px] sm:p-6"
      >
        <SheetHeader className="items-start gap-3 border-b border-gray-100 px-0 pt-1 pb-6 pr-10 text-left">
          <div>
            <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-700">
              Your McGill community
            </p>
            <SheetTitle className="text-2xl font-semibold tracking-tight text-gray-800">
              AKCSE McGill
            </SheetTitle>
            <SheetDescription className="mt-2 text-sm leading-relaxed text-gray-500">
              Good things happen together.
            </SheetDescription>
          </div>
        </SheetHeader>

        <nav aria-label="Mobile navigation" className="py-6">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-500">
            Explore
          </p>
          <ul className="space-y-2">
            {navMenuItems.map((item) => (
              <li key={item.path}>
                <SheetClose asChild>
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `group flex min-h-[76px] items-center gap-3 rounded-xl border p-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700 ${
                        isActive
                          ? "border-orange-100 bg-orange-50 text-orange-700"
                          : "border-transparent text-gray-700 hover:border-gray-100 hover:bg-gray-50"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${isActive ? "bg-white text-orange-700 shadow-sm" : "bg-gray-100 text-gray-500 group-hover:text-orange-700"}`}>
                          <item.icon size={19} aria-hidden="true" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold">{item.title}</span>
                          <span className={`mt-0.5 block text-xs leading-relaxed ${isActive ? "text-orange-800" : "text-gray-500"}`}>
                            {item.description}
                          </span>
                        </span>
                        <ChevronRight size={16} className="shrink-0" aria-hidden="true" />
                      </>
                    )}
                  </NavLink>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto border-t border-gray-100 pt-5">
          <SheetClose asChild>
            <a
              href="https://www.instagram.com/akcse_mcgill/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl bg-orange-700 p-4 text-white transition-colors hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700"
            >
              <Instagram size={20} className="shrink-0" aria-hidden="true" />
              <span className="flex-1">
                <span className="block text-sm font-medium">Keep in touch</span>
                <span className="mt-0.5 block text-xs text-orange-100">@akcse_mcgill</span>
              </span>
              <ArrowUpRight size={18} aria-hidden="true" />
              <span className="sr-only"> on Instagram (opens in a new tab)</span>
            </a>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
