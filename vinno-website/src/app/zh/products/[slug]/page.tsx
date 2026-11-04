import { ProductDetailPage } from "@/components/pages/Interior";
import { productSlugs } from "@/content/v2";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => buildMetadata("zh", `/products/${slug}`, "产品方向 | VINNO"));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProductDetailPage locale="zh" slug={slug} />;
}
