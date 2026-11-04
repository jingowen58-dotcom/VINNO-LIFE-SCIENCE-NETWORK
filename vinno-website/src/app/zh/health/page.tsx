import { HealthPage } from "@/components/pages/Interior";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("zh", "/health", "宠物健康 | VINNO");

export default function Page() {
  return <HealthPage locale="zh" />;
}
