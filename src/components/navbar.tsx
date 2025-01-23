"use client"

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useMedia } from "react-use";

import { cn } from "@/lib/utils";

type NavItem = {
  icon?: React.ReactNode;
  label?: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Share", href: "/share" },
];

export default function Navbar() {
  const isDesktop = useMedia('(min-width: 1024px)', true)
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  console.log(pathname)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      // 1. 判断是否滚动
      // 2. 判断是否滚动到顶部
      // 3. 移动端菜单打开时保持显示
      const isScrollingUp = prevScrollPos > currentScrollPos
      const isAtTop = currentScrollPos < 10
      setVisible(isScrollingUp || isAtTop || isOpen)

      setPrevScrollPos(currentScrollPos)
    }

    // 监听滚动事件
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos, isOpen, visible])

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-300",
        visible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      {/* Desktop Navigation */}
      <nav className="hidden sm:block relative bg-[#2f3242] rounded-full shadow-lg px-2 py-1.5">
        <div className="flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                pathname === item.href ? "bg-[#3a3e52] text-white" : "text-gray-300 hover:text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="sm:hidden w-full max-w-md">
        <div className="bg-[#2f3242] rounded-full shadow-lg px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className={cn("text-sm font-medium", pathname === "/" ? "text-white" : "text-gray-300")}>
              Blog
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={cn(
            "mt-2 transition-all duration-300 ease-in-out",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none",
          )}
        >
          <div className="bg-[#2f3242] rounded-2xl shadow-lg py-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "block px-4 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-[#3a3e52] text-white"
                    : "text-gray-300 hover:text-white hover:bg-[#3a3e52]",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

