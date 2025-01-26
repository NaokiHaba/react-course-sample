import { Product } from "../types";
import { ChevronRight } from "lucide-react";

type Props = {
	product: Product;
};

export const ProductsHeader = ({ product }: Props) => {
	return (
		<div className="flex items-center justify-between">
			<div>
				<h3 className="text-sm font-bold sm:text-base">{product.name}</h3>
				<p className="text-xs text-secondary-text sm:text-sm">
					{product.category.name}
				</p>
			</div>
			<a
				href="/"
				className="flex items-center text-sm text-blue-500 hover:text-sky-500"
			>
				すべて見る
				<ChevronRight />
			</a>
		</div>
	);
};
