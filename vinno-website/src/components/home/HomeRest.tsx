import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { getContent } from "@/content";
import { getV2 } from "@/content/v2";
import type { Locale } from "@/content/types";
import { companionPhotos } from "@/lib/media";

export function HomeRest({ locale }: { locale: Locale }) {
  const copy = getV2(locale);
  const media = getContent(locale).media;

  return (
    <>
      <section className="py-20 md:py-28" aria-labelledby="brand-title">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs tracking-[0.18em] text-[var(--color-secondary)]">02</p>
              <h2 id="brand-title" className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                {copy.brandTitle}
              </h2>
              <div className="mt-6 space-y-4">
                {copy.brandBody.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-7 text-[var(--color-text-secondary)]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <figure>
              <Photo src={companionPhotos.together} alt={media.togetherAlt} className="aspect-[4/3] w-full rounded-[28px] object-cover" />
              <figcaption className="mt-3 text-xs leading-5 text-[var(--color-text-muted)]">{media.photoNote}</figcaption>
            </figure>
          </div>
        </Container>
      </section>
      <section className="bg-[var(--color-bg-secondary)] py-20 md:py-28" aria-labelledby="home-science-title">
        <Container>
          <p className="text-xs tracking-[0.18em] text-[var(--color-secondary)]">03</p>
          <h2 id="home-science-title" className="mt-4 max-w-3xl text-3xl font-medium tracking-[-0.03em] md:text-5xl">
            {copy.scienceTitle}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-7 text-[var(--color-text-secondary)]">{copy.scienceBody}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {copy.sciencePoints.map((point) => (
              <li key={point} className="surface px-4 py-4 text-sm text-[var(--color-text-primary)]">
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href={`/${locale}/science/`}>{locale === "zh" ? "了解 VINNO 科学体系" : "See the science"}</Button>
          </div>
        </Container>
      </section>
      <section className="py-20 md:py-28" aria-labelledby="home-health-title">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <figure className="lg:order-2">
              <Photo src={companionPhotos.care} alt={media.careAlt} className="aspect-[4/3] w-full rounded-[28px] object-cover" />
              <figcaption className="mt-3 text-xs leading-5 text-[var(--color-text-muted)]">{media.photoNote}</figcaption>
            </figure>
            <div>
              <p className="text-xs tracking-[0.18em] text-[var(--color-secondary)]">04</p>
              <h2 id="home-health-title" className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
                {copy.healthTitle}
              </h2>
              <p className="mt-6 text-base leading-7 text-[var(--color-text-secondary)]">{copy.healthBody}</p>
              <ul className="mt-6 space-y-2">
                {copy.healthPoints.map((point) => (
                  <li key={point} className="text-sm leading-6 text-[var(--color-text-primary)]">
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href={`/${locale}/health/`}>{locale === "zh" ? "探索宠物健康" : "Explore pet health"}</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-[var(--color-bg-secondary)] py-20 md:py-28" aria-labelledby="home-products-title">
        <Container>
          <p className="text-xs tracking-[0.18em] text-[var(--color-secondary)]">05</p>
          <h2 id="home-products-title" className="mt-4 max-w-3xl text-3xl font-medium tracking-[-0.03em] md:text-5xl">
            {copy.productsTitle}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-7 text-[var(--color-text-secondary)]">{copy.productsBody}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {copy.products.map((product) => (
              <Link key={product.slug} href={`/${locale}/products/${product.slug}/`} className="surface block overflow-hidden hover:border-[var(--color-primary)]">
                <Photo src={product.image} alt={product.name} className="aspect-[4/5] w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-xl text-[var(--color-text-primary)]">{product.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">{product.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-20 md:py-28" aria-labelledby="home-vision-title">
        <Container>
          <p className="text-xs tracking-[0.18em] text-[var(--color-secondary)]">06</p>
          <h2 id="home-vision-title" className="mt-4 max-w-3xl text-3xl font-medium tracking-[-0.03em] md:text-5xl">
            {locale === "zh" ? "从宠物健康寿命，走向更广的生命科学。" : "From pet healthspan toward broader life science."}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-7 text-[var(--color-text-secondary)]">
            {locale === "zh"
              ? "这是长期愿景，不是已经完成的研究，也不能把宠物上的观察直接说成对人类有效。"
              : "This is a long-term aim, not completed research, and an observation in a pet is not evidence about people."}
          </p>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {(locale === "zh"
              ? ["宠物健康寿命", "动物衰老", "比较生物学", "更广的生命科学"]
              : ["Pet healthspan", "Animal aging", "Comparative biology", "Broader life science"]
            ).map((step, index) => (
              <li key={step} className="surface px-4 py-5">
                <p className="text-xs tracking-[0.14em] text-[var(--color-secondary)]">0{index + 1}</p>
                <p className="mt-2 text-base text-[var(--color-text-primary)]">{step}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <Button href={`/${locale}/science/progress/`} variant="secondary">
              {locale === "zh" ? "查看真实进度" : "See the actual progress"}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
