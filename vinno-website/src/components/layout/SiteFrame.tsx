import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { getContent } from "@/content";
import type { Locale } from "@/content/types";

export function SiteFrame({
  locale,
  children,
  light = false,
}: {
  locale: Locale;
  children: ReactNode;
  light?: boolean;
}) {
  const content = getContent(locale);

  return (
    <>
      <a className="skip-link" href="#main">
        {content.nav.skip}
      </a>
      <Navbar locale={locale} content={content} />
      <main id="main" className={light ? "theme-light min-h-screen pt-32" : undefined}>
        {children}
      </main>
      <Footer locale={locale} content={content} />
    </>
  );
}
