import { Link } from "react-router-dom";
import MobileNav from "./MobileNavbar";
import { MenuLink } from "./MenuLink";

const navMenuItems = [
  {
    title: "Events",
    path: "/events",
  },
  {
    title: "Executives",
    path: "/executives",
  },
  {
    title: "Projects",
    path: "/projects",
  },
];

export default function Navbar() {
  return (
    <nav className="flex w-full justify-between p-3 mt-4 lg:mt-0 border-b">
      <Link to="/" className="-mt-7 h-12 w-24 block">
        <img
          src="/AKCSE_McGill.png"
          height={120}
          width={120}
          alt="AKCSE McGill"
          className="transform -translate-y-2 lg:transform-none"
        />
      </Link>
      <div className="lg:flex  hidden ml-auto">
        {navMenuItems.map((item) => {
          return <MenuLink item={item} key={item.path} />;
        })}
      </div>
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </nav>
  );
}
