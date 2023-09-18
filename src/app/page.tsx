import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		category: "Clothes",
		name: "Brown Shirt",
		price: 125,
		coverImage: {
			alt: "Brown Shirt",
			src: "/product_1.png",
		}
	},
	{
		id: "2",
		category: "Clothes",
		name: "Colourful Blouse",
		price: 225,
		coverImage: {
			alt: "Colourful Blouse",
			src: "/product_2.png",
		}
	},
	{
		id: "3",
		category: "Clothes",
		name: "Black Longsleeve",
		price: 185,
		coverImage: {
			alt: "Black Longsleeve",
			src: "/product_2.png",
		}
	},
	{
		id: "4",
		category: "Clothes",
		name: "Green Shirt",
		price: 105,
		coverImage: {
			alt: "Green Shirt",
			src: "/product_4.png",
		}
	},
];

export default function Home() {
	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<ProductList products={products} data-testid="products-list"/>
		</section>
	);
}
