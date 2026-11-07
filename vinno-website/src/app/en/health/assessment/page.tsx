import { AssessmentPage } from "@/components/health/AssessmentPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("en", "/health/assessment", "Daily pet observation record | VINNO");

export default function Page() {
  return <AssessmentPage locale="en" />;
}
