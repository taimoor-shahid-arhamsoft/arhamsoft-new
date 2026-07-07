import ProductsWithRecaptcha from "@/components/Services/Products/ProductsWithRecaptcha";

export async function generateMetadata() {
  return {
    title: "Explore Innovative Software Products by DataonMatrix",
    description: "Discover software products by DataonMatrix—ready-to-use tools built for performance, flexibility, and real business outcomes.",
    keywords: ["Software Products"],
    alternates: {
			canonical: "https://www.dataonmatrix.com/products",
		}
  };
}

export default function Page() {
  return <ProductsWithRecaptcha />;
}