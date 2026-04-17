"use client";

import { useRouter, usePathname } from "next/navigation";
import { MouseEvent } from "react";

interface SectionLinkProps {
  href: string; // e.g. "/#about"
  className?: string;
  children: React.ReactNode;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export default function SectionLink({ href, className, children, onClick }: SectionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("/#")) return; // Not a section link
    const section = href.split("#")[1];
    if (pathname !== "/") {
      e.preventDefault();
      // Go to home, then scroll after navigation
      window.localStorage.setItem("scrollToSection", section);
      router.push("/");
    } else {
      // Already on home, scroll directly
      const el = document.getElementById(section);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (onClick) onClick(e);
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
