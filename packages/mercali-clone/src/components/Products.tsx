import { Product } from "../types";
import { ProductsHeader } from "./ProductsHeader";

type Props = {
	product: Product;
};

export const Products = ({ product }: Props) => {
	return (
		<section className="space-y-6 border-t border-secondary-border py-6">
			<ProductsHeader product={product} />
			<ul
				// ウィンドウの横幅によって列数を変える
				className="grid grid-cols-[repeat(3,1fr)] gap-1 sm:grid-cols-[repeat(4,1fr)] lg:grid-cols-[repeat(5,1fr)] lg:gap-6"
			>
				{product.items.map((item) => (
					<li
						key={item.code}
						// ウィンドウの横幅によって列数が変わるため、2行になるように表示する商品数を変える
						className="hidden lg:[&:nth-child(-n+10)]:block [&:nth-child(-n+6)]:block sm:[&:nth-child(-n+8)]:block"
					>
						<img src={item.imageUrl} />
						{item.name}
					</li>
				))}
			</ul>
		</section>
	);
};
