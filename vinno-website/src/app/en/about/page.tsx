import { AboutPage } from "@/components/pages/Interior";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("en", "/about", "About | VINNO");

export default function Page() {
  return <AboutPage locale="en" />;
}
