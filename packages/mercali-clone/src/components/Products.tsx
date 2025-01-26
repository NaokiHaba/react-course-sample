import { Product } from "../types";
import { ProductsHeader } from "./ProductsHeader";
import { ProductItem } from "./ProductItem";

type Props = {
	product: Product;
	favoritesProduct: string[];
	updateFavorite: (productCode: string) => void;
	removeFavorite: (productCode: string) => void;
};

export const Products = ({
	product,
	favoritesProduct,
	updateFavorite,
	removeFavorite,
}: Props) => {
	return (
		<section className="space-y-6 border-t border-secondary-border py-6">
			<ProductsHeader product={product} />
			<ul className="grid grid-cols-[repeat(3,1fr)] gap-1 sm:grid-cols-[repeat(4,1fr)] lg:grid-cols-[repeat(5,1fr)] lg:gap-6">
				{product.items.map((item) => (
					<li
						key={item.code}
						className="hidden lg:[&:nth-child(-n+10)]:block [&:nth-child(-n+6)]:block sm:[&:nth-child(-n+8)]:block"
					>
						<ProductItem
							product={item}
							favoritesProduct={favoritesProduct}
							updateFavorite={updateFavorite}
							removeFavorite={removeFavorite}
						/>
					</li>
				))}
			</ul>
		</section>
	);
};
