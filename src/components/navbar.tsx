"use client"

import { AlignLeft, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import DesktopNavigation from "./desktop-navigation";
import MobileMenu from "./mobile-menu";

export type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blogs" },
  { label: "Project", href: "/projects" },
  { label: "Share", href: "/share" },
];

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

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
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        visible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className="container-px backdrop-blur-md group shadow-md">
        <div className="flex items-center justify-between h-[56px]">
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <AlignLeft className="h-6 w-6" />}
            </button>
          </div>

          {/* hover line */}
          <span className="absolute -bottom-px left-[2.5rem] h-px w-[calc(100%-5rem)] bg-gradient-to-r from-gray-500/0 via-gray-500/80 to-gray-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <DesktopNavigation navItems={navItems} pathname={pathname} />
        </div>
        <MobileMenu navItems={navItems} isOpen={isOpen} setIsOpen={setIsOpen} pathname={pathname} />
      </div>
    </nav>
  );
}

