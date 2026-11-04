import Link from "next/link";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { HeroVisual } from "@/components/hero/HeroVisual";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { VulsSection } from "@/components/sections/VulsSection";
import { ResearchDomainsSection } from "@/components/sections/ResearchDomainsSection";
import { AiResearchSection } from "@/components/sections/AiResearchSection";
import { OpenScienceSection } from "@/components/sections/OpenScienceSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { statusCatalog, statusIds } from "@/config/status";
import { getContent } from "@/content";
import { getProduct, getV2, productSlugs, type ProductSlug } from "@/content/v2";
import { brand } from "@/config/brand";
import type { Locale } from "@/content/types";
import { notFound } from "next/navigation";

export function SciencePage({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const copy = getV2(locale);
  return (
    <SiteFrame locale={locale} light>
      <Container>
        <p className="text-xs tracking-[0.18em] text-[var(--color-secondary)]">{locale === "zh" ? "科学研究" : "Science"}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-0.03em] md:text-5xl">{locale === "zh" ? "科学研究" : "Science"}</h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-[var(--color-text-secondary)]">{copy.scienceIntro}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {copy.scienceLinks.map((link) => (
            <Link key={link.href} href={`/${locale}${link.href}/`} className="surface block p-5 hover:border-[var(--color-primary)]">
              <h2 className="text-xl">{link.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">{link.text}</p>
            </Link>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-[var(--color-text-secondary)]">{copy.emptyDirectory}</p>
      </Container>
      <ResearchDomainsSection content={content} />
      <AiResearchSection content={content} />
      <OpenScienceSection content={content} />
    </SiteFrame>
  );
}

export function TechnologyPage({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  return (
    <SiteFrame locale={locale} light>
      <Container>
        <p className="text-xs tracking-[0.18em] text-[var(--color-secondary)]">VULS</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-0.03em] md:text-5xl">{locale === "zh" ? "VULS 与六层架构" : "VULS and the six layers"}</h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-[var(--color-text-secondary)]">
          {locale === "zh"
            ? "下面保留原来的架构交互和 VULS 说明。标准不是数据库，验证器不是科研平台。"
            : "The interactive stack and the VULS explanation stay here. The standard is not a database, and the validator is not a research platform."}
        </p>
      </Container>
      <section className="theme-dark mt-14" aria-labelledby="vuls-globe">
        <Container className="py-12 md:py-16">
          <div className="grid items-center gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs tracking-[0.18em] text-[var(--color-primary)]">VULS</p>
              <h2 id="vuls-globe" className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
                {locale === "zh" ? "把分散的观察放进同一套结构。" : "One structure for separate observations."}
              </h2>
              <p className="mt-5 text-sm leading-6 text-[var(--color-text-secondary)]">
                {locale === "zh"
                  ? "地球仪表示 VINNO 想把观察放进同一套数据标准。它不是合作机构地图，不是实时数据库，也不能转动出寿命结论。"
                  : "The globe shows the intention to place observations in one data standard. It is not a map of partners, not a live database, and it does not produce a lifespan result."}
              </p>
            </div>
            <HeroVisual label={content.hero.visualLabel} />
          </div>
        </Container>
      </section>
      <ArchitectureSection content={content} />
      <VulsSection content={content} />
    </SiteFrame>
  );
}

export function ProgressPage({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  return (
    <SiteFrame locale={locale} light>
      <Container>
        <p className="text-xs tracking-[0.18em] text-[var(--color-secondary)]">{locale === "zh" ? "研究进展" : "Progress"}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-0.03em] md:text-5xl">{locale === "zh" ? "研究进展" : "Progress"}</h1>
        <ul className="mt-8 flex flex-wrap gap-2">
          {statusIds.map((id) => (
            <li key={id}>
              <StatusBadge status={id} locale={locale} />
            </li>
          ))}
        </ul>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-[var(--color-text-secondary)]">
          {locale === "zh"
            ? "已实现表示仓库里已经可以核对。建设中表示草案还在继续。研究准备表示有计划但还没做完。未来规划是长期方向。潜在合作只在有公开来源且尚未正式合作时使用；当前没有这样的名单。"
            : "Implemented means it can be checked in the repository. In progress means the draft is still being written. In preparation means a plan exists and the work is not finished. Future direction is long-term. Potential collaboration is used only with a public source and no formal relationship. No such list is published."}
        </p>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">{statusCatalogMeaning(locale)}</p>
      </Container>
      <RoadmapSection content={content} />
    </SiteFrame>
  );
}

function statusCatalogMeaning(locale: Locale) {
  return statusIds.map((id) => statusCatalog[id][locale]).join(" · ");
}

export function HealthPage({ locale }: { locale: Locale }) {
  const copy = getV2(locale);
  return (
    <SiteFrame locale={locale} light>
      <Container>
        <p className="text-xs tracking-[0.18em] text-[var(--color-secondary)]">{locale === "zh" ? "宠物健康" : "Pet health"}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-0.03em] md:text-5xl">{copy.healthTitle}</h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-[var(--color-text-secondary)]">{copy.healthIntro}</p>
        <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--color-text-secondary)]">{copy.healthBody}</p>
        <ul className="mt-6 space-y-2">
          {copy.healthLimits.map((item) => (
            <li key={item} className="text-sm leading-6 text-[var(--color-text-primary)]">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button href={`/${locale}/health/assessment/`}>{locale === "zh" ? "开始健康评估" : "Start a health review"}</Button>
        </div>
      </Container>
    </SiteFrame>
  );
}

export function ProductsPage({ locale }: { locale: Locale }) {
  const copy = getV2(locale);
  return (
    <SiteFrame locale={locale} light>
      <Container>
        <p className="text-xs tracking-[0.18em] text-[var(--color-secondary)]">{locale === "zh" ? "产品中心" : "Products"}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-0.03em] md:text-5xl">{copy.productsTitle}</h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-[var(--color-text-secondary)]">{copy.productsBody}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {copy.products.map((product) => (
            <Link key={product.slug} href={`/${locale}/products/${product.slug}/`} className="surface block overflow-hidden hover:border-[var(--color-primary)]">
              <Photo src={product.image} alt={product.name} className="aspect-[4/5] w-full object-cover" />
              <div className="p-5">
                <h2 className="text-xl">{product.name}</h2>
                <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">{product.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </SiteFrame>
  );
}

export function ProductDetailPage({ locale, slug }: { locale: Locale; slug: string }) {
  const product = getProduct(locale, slug);
  if (!product || !productSlugs.includes(slug as ProductSlug)) notFound();
  return (
    <SiteFrame locale={locale} light>
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
          <Photo src={product.image} alt={product.name} priority className="aspect-[4/5] w-full rounded-[28px] object-cover" />
          <div>
            <p className="text-xs tracking-[0.18em] text-[var(--color-secondary)]">{locale === "zh" ? "产品中心" : "Products"}</p>
            <h1 className="mt-4 text-4xl font-medium tracking-[-0.03em] md:text-5xl">{product.name}</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--color-text-secondary)]">{product.summary}</p>
            <p className="mt-6 max-w-xl text-sm leading-6 text-[var(--color-text-secondary)]">{product.safety}</p>
            <div className="mt-8">
              <Button href={`/${locale}/products/`} variant="secondary">
                {locale === "zh" ? "返回产品中心" : "Back to products"}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </SiteFrame>
  );
}

export function AboutPage({ locale }: { locale: Locale }) {
  const copy = getV2(locale);
  return (
    <SiteFrame locale={locale} light>
      <Container>
        <h1 className="text-4xl font-medium tracking-[-0.03em] md:text-5xl">{copy.aboutTitle}</h1>
        <div className="mt-6 max-w-3xl space-y-4">
          {copy.aboutBody.map((paragraph) => (
            <p key={paragraph} className="text-base leading-7 text-[var(--color-text-secondary)]">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="surface mt-10 max-w-xl p-6">
          <h2 className="text-xs tracking-[0.18em] text-[var(--color-primary)]">{locale === "zh" ? "联系" : "Contact"}</h2>
          <p className="mt-4 text-base">{brand.company}</p>
          <a className="mt-3 inline-block text-sm text-[var(--color-primary)] underline underline-offset-4" href={`mailto:${brand.email}`}>
            {brand.email}
          </a>
          <p className="mt-4 text-sm leading-6 text-[var(--color-text-secondary)]">
            <a href={brand.repository} rel="noreferrer" className="underline underline-offset-4">
              {locale === "zh" ? "标准草案和参考验证工具在公开仓库中。" : "The draft standard and reference validator are in the public repository."}
            </a>
          </p>
        </div>
      </Container>
    </SiteFrame>
  );
}
