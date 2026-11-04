import { SiteFrame } from "@/components/layout/SiteFrame";
import { HomeRest } from "@/components/home/HomeRest";
import { HeroSection } from "@/components/sections/HeroSection";
import { getContent } from "@/content";
import type { Locale } from "@/content/types";
import { organizationJsonLd } from "@/lib/seo";

export function HomePage({ locale }: { locale: Locale }) {
  const content = getContent(locale);

  return (
    <SiteFrame locale={locale}>
      <HeroSection locale={locale} content={content} />
      <HomeRest locale={locale} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd(locale)) }} />
    </SiteFrame>
  );
}
