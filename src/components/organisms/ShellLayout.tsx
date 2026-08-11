"use client";

import { useCallback, useState } from "react";
import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import MobileMenu from "./MobileMenu";

/**
 * Client shell that owns the mobile menu state shared by Topbar and
 * MobileMenu. Keeps layout.tsx a Server Component (metadata export).
 * Desktop: fixed sidebar (lg+) + content offset. Mobile: topbar + overlay.
 */
export default function ShellLayout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsMenuOpen((open) => !open), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <>
      <Sidebar />
      <div className="relative z-10 flex-1 lg:ml-[300px] xl:ml-[320px]">
        <Topbar onMenuToggle={toggleMenu} isOpen={isMenuOpen} />
        <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
        {children}
      </div>
    </>
  );
}
