import { ProgressPage } from "@/components/pages/Interior";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("en", "/science/progress", "Progress | VINNO");

export default function Page() {
  return <ProgressPage locale="en" />;
}
