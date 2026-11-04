import { SciencePage } from "@/components/pages/Interior";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("zh", "/science", "科学研究 | VINNO");

export default function Page() {
  return <SciencePage locale="zh" />;
}
