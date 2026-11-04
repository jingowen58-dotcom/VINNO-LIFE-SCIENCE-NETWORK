import { ProductsPage } from "@/components/pages/Interior";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("en", "/products", "Products | VINNO");

export default function Page() {
  return <ProductsPage locale="en" />;
}
