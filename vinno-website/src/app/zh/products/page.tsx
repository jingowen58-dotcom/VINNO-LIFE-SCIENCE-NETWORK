import { ProductsPage } from "@/components/pages/Interior";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("zh", "/products", "产品中心 | VINNO");

export default function Page() {
  return <ProductsPage locale="zh" />;
}
