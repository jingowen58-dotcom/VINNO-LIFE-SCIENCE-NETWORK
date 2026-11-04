import { SciencePage } from "@/components/pages/Interior";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("en", "/science", "Science | VINNO");

export default function Page() {
  return <SciencePage locale="en" />;
}
