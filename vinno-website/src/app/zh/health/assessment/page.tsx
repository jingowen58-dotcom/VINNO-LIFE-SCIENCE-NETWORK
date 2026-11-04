import { AssessmentPage } from "@/components/health/AssessmentPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("zh", "/health/assessment", "宠物健康信息评估 | VINNO");

export default function Page() {
  return <AssessmentPage locale="zh" />;
}
