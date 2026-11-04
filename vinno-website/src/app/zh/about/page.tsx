import { AboutPage } from "@/components/pages/Interior";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("zh", "/about", "关于 VINNO");

export default function Page() {
  return <AboutPage locale="zh" />;
}
