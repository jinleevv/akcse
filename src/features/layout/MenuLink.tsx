import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

interface MenuLinkProps {
  item: {
    title: string;
    path: string;
  };
}

export function MenuLink({ item }: MenuLinkProps) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="w-full">
      <Link to={item.path}>
        {pathname === item.path ? (
          <Button
            variant="ghost"
            className="text-red-600 hover:text-red-600 hover:bg-white"
          >
            {item.title}
          </Button>
        ) : (
          <Button variant="ghost" className="hover:text-red-600 hover:bg-white">
            {item.title}
          </Button>
        )}
      </Link>
    </div>
  );
}
