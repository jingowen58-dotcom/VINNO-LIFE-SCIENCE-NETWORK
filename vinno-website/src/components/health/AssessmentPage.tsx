import { Container } from "@/components/layout/Container";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { AssessmentForm } from "@/components/health/AssessmentForm";
import { getV2 } from "@/content/v2";
import type { Locale } from "@/content/types";

export function AssessmentPage({ locale }: { locale: Locale }) {
  const copy = getV2(locale).assessment;
  return (
    <SiteFrame locale={locale} light>
      <Container>
        <h1 className="max-w-3xl text-4xl font-medium tracking-[-0.03em] md:text-5xl">{copy.title}</h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-[var(--color-text-secondary)]">{copy.intro}</p>
        <div className="mt-8">
          <AssessmentForm locale={locale} />
        </div>
      </Container>
    </SiteFrame>
  );
}
