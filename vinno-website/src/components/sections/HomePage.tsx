import { SiteFrame } from "@/components/layout/SiteFrame";
import { HomeRest } from "@/components/home/HomeRest";
import { HeroSection } from "@/components/sections/HeroSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { getContent } from "@/content";
import { getV2 } from "@/content/v2";
import type { Locale } from "@/content/types";
import { organizationJsonLd } from "@/lib/seo";

export function HomePage({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const copy = getV2(locale);

  return (
    <SiteFrame locale={locale}>
      <HeroSection locale={locale} content={content} />
      <div className="theme-light">
        <HomeRest locale={locale} />
        <RoadmapSection content={content} />
        <p className="mx-auto max-w-[1240px] px-5 pb-16 text-sm leading-6 text-[var(--color-text-secondary)] md:px-[5vw]">{copy.roadmapNote}</p>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd(locale)) }} />
    </SiteFrame>
  );
}
