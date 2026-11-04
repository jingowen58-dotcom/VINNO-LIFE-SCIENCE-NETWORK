import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { getV2 } from "@/content/v2";
import type { Locale } from "@/content/types";

export function HomeRest({ locale }: { locale: Locale }) {
  const copy = getV2(locale);

  return (
    <>
      <section className="py-20 md:py-28" aria-labelledby="brand-title">
        <Container>
          <p className="text-xs tracking-[0.18em] text-[var(--color-secondary)]">02</p>
          <h2 id="brand-title" className="mt-4 max-w-3xl text-3xl font-medium tracking-[-0.03em] md:text-5xl">
            {copy.brandTitle}
          </h2>
          <div className="mt-6 max-w-3xl space-y-4">
            {copy.brandBody.map((paragraph) => (
              <p key={paragraph} className="text-base leading-7 text-[var(--color-text-secondary)]">
                {paragraph}
              </p>
            ))}
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
            <Button href={`/${locale}/science/`}>{locale === "zh" ? "进入科学研究" : "Open the science pages"}</Button>
          </div>
        </Container>
      </section>
      <section className="py-20 md:py-28" aria-labelledby="home-health-title">
        <Container>
          <p className="text-xs tracking-[0.18em] text-[var(--color-secondary)]">04</p>
          <h2 id="home-health-title" className="mt-4 max-w-3xl text-3xl font-medium tracking-[-0.03em] md:text-5xl">
            {copy.healthTitle}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-7 text-[var(--color-text-secondary)]">{copy.healthBody}</p>
          <ul className="mt-6 max-w-3xl space-y-2">
            {copy.healthPoints.map((point) => (
              <li key={point} className="text-sm leading-6 text-[var(--color-text-primary)]">
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href={`/${locale}/health/assessment/`}>{locale === "zh" ? "开始健康评估" : "Start a health review"}</Button>
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
              <Link key={product.slug} href={`/${locale}/products/${product.slug}/`} className="surface block p-5 hover:border-[var(--color-primary)]">
                <p className="text-xs tracking-[0.14em] text-[var(--color-secondary)]">{product.stage}</p>
                <h3 className="mt-3 text-xl text-[var(--color-text-primary)]">{product.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">{product.summary}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
