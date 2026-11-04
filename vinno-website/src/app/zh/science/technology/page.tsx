import { TechnologyPage } from "@/components/pages/Interior";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("zh", "/science/technology", "VULS 与六层架构 | VINNO");

export default function Page() {
  return <TechnologyPage locale="zh" />;
}
