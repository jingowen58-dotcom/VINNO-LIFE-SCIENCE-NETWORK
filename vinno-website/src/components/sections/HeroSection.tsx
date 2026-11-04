import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import type { SiteContent } from "@/content/types";
import { companionPhotos } from "@/lib/media";

export function HeroSection({ locale, content }: { locale: "en" | "zh"; content: SiteContent }) {
  const copy = content.hero;

  return (
    <section className="bg-[var(--color-bg)] pt-32 pb-16 md:pt-36 md:pb-24" aria-labelledby="hero-title">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.22em] text-[var(--color-primary)]">{copy.eyebrow}</p>
            <h1 id="hero-title" className="mt-5 text-[2.05rem] leading-[1.2] font-medium tracking-[-0.035em] whitespace-pre-line text-[var(--color-text-primary)] sm:text-4xl lg:text-[2.85rem]">
              {copy.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--color-text-secondary)] md:text-lg">{copy.subtitle}</p>
            <p className="mt-6 max-w-xl border-l border-[var(--color-secondary)] pl-4 text-sm leading-6 text-[var(--color-text-secondary)]">{copy.today}</p>
            <p className="mt-6 text-sm tracking-[0.08em] text-[var(--color-primary)]">{copy.aside}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`/${locale}/health/`}>{copy.primary}</Button>
              <Button href={`/${locale}/science/`} variant="secondary">
                {copy.secondary}
              </Button>
            </div>
          </div>
          <figure>
            <Photo src={companionPhotos.hero} alt={content.media.heroCompanionAlt} priority className="aspect-[4/5] w-full rounded-[28px] object-cover object-[center_28%]" />
            <figcaption className="mt-3 text-xs leading-5 text-[var(--color-text-muted)]">{content.media.photoNote}</figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
