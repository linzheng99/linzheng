import Link from "next/link";

import { cn } from "@/lib/utils";

import { type NavItem } from "./navbar";

interface DesktopNavigationProps {
  navItems: NavItem[];
  pathname: string;
}

export default function DesktopNavigation({
  navItems,
  pathname,
}: DesktopNavigationProps) {
  return (
    <div className="hidden sm:flex items-center justify-center flex-1 space-x-4">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={cn(
            "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300",
            "hover:text-white",
            pathname === item.href ? "text-white" : "text-gray-300",
          )}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
