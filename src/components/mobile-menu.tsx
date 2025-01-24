import Link from "next/link";

import { cn } from "@/lib/utils";

import { type NavItem } from "./navbar";

interface MobileMenuProps {
  navItems: NavItem[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  pathname: string;
}

export default function MobileMenu({
  navItems,
  isOpen,
  setIsOpen,
  pathname,
}: MobileMenuProps) {
  return (
    <div
      className={cn(
        "sm:hidden transition-all duration-300 ease-in-out",
        isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden",
      )}
    >
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "block px-3 py-2 rounded-md text-base font-medium transition-all duration-300",
              "hover:bg-white/10 hover:text-white",
              pathname === item.href ? "text-white bg-white/10" : "text-gray-300",
            )}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
