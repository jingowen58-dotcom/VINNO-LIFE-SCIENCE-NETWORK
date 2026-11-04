import { HealthPage } from "@/components/pages/Interior";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("en", "/health", "Pet health | VINNO");

export default function Page() {
  return <HealthPage locale="en" />;
}
