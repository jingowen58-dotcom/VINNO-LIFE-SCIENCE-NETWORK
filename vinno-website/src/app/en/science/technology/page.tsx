import { TechnologyPage } from "@/components/pages/Interior";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("en", "/science/technology", "VULS | VINNO");

export default function Page() {
  return <TechnologyPage locale="en" />;
}
