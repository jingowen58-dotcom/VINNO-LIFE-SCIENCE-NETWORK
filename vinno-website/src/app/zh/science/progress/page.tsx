import { ProgressPage } from "@/components/pages/Interior";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("zh", "/science/progress", "研究进展 | VINNO");

export default function Page() {
  return <ProgressPage locale="zh" />;
}
