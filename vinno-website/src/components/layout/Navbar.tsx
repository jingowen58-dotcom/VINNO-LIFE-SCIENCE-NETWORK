"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { SiteContent } from "@/content/types";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

function swapLocale(pathname: string, next: "en" | "zh") {
  if (!/^\/(en|zh)(?=\/|$)/.test(pathname)) return `/${next}/`;
  return pathname.replace(/^\/(en|zh)(?=\/|$)/, `/${next}`);
}

export function Navbar({ locale, content }: { locale: "en" | "zh"; content: SiteContent }) {
  const pathname = usePathname() || `/${locale}`;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const other = locale === "en" ? "zh" : "en";
  const currentPath = pathname.replace(/\/$/, "") || "/";

  function isCurrent(path: string) {
    const target = (path ? `/${locale}${path}` : `/${locale}`).replace(/\/$/, "");
    if (!path) return currentPath === target;
    return currentPath === target || currentPath.startsWith(`${target}/`);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-40 border-b transition-colors", scrolled || open ? "border-[var(--color-border)] bg-[rgba(7,17,31,0.86)] backdrop-blur-md" : "border-transparent bg-transparent")}>
      <div className="mx-auto flex h-28 w-full max-w-[1440px] items-center justify-between px-5 md:px-[5vw]">
        <Link href={`/${locale}/`} aria-label="维诺·恩宠 VINNO · ENCHONG">
          <Logo priority className="h-24" />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {content.nav.links.map((link) => (
            <Link key={link.id} href={link.path ? `/${locale}${link.path}/` : `/${locale}/`} className={cn("text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]", isCurrent(link.path) && "text-[var(--color-text-primary)]")} aria-current={isCurrent(link.path) ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href={swapLocale(pathname, other)} className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]" hrefLang={other}>
            {content.nav.language}
          </Link>
          <Link href={`/${locale}/health/assessment/`} className="inline-flex min-h-10 items-center rounded-[10px] bg-[var(--color-primary)] px-4 text-sm font-medium text-[var(--color-bg)]">
            {content.nav.assess}
          </Link>
        </div>
        <button type="button" className="inline-flex size-11 items-center justify-center text-[var(--color-text-primary)] lg:hidden" aria-expanded={open} aria-label={open ? content.nav.closeMenu : content.nav.openMenu} onClick={() => setOpen((value) => !value)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open ? (
        <nav className="border-t border-[var(--color-border)] px-5 py-4 lg:hidden" aria-label="Mobile">
          <div className="flex flex-col">
            {content.nav.links.map((link) => (
              <Link key={link.id} href={link.path ? `/${locale}${link.path}/` : `/${locale}/`} className="border-b border-[var(--color-border)] py-4 text-lg text-[var(--color-text-primary)]" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href={`/${locale}/health/assessment/`} className="py-4 text-lg text-[var(--color-primary)]" onClick={() => setOpen(false)}>
              {content.nav.assess}
            </Link>
            <Link href={swapLocale(pathname, other)} className="pt-2 text-sm tracking-[0.16em] text-[var(--color-primary)]" hrefLang={other} onClick={() => setOpen(false)}>
              {content.nav.language}
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
