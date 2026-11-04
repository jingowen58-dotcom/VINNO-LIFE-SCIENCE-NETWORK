import { ProductDetailPage } from "@/components/pages/Interior";
import { getProduct, productSlugs } from "@/content/v2";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const product = getProduct("en", slug);
    return buildMetadata("en", `/products/${slug}`, product ? `${product.name} | VINNO` : "Products | VINNO");
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProductDetailPage locale="en" slug={slug} />;
}
