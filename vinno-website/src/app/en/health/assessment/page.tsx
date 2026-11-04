import { AssessmentPage } from "@/components/health/AssessmentPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("en", "/health/assessment", "Pet health review | VINNO");

export default function Page() {
  return <AssessmentPage locale="en" />;
}
