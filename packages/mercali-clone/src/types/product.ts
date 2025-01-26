export type Category = {
	id: number;
	name: string;
};

export type ProductItem = {
	code: string;
	name: string;
	price: number;
	imageUrl: string;
};

export type Product = {
	name: string;
	category: Category;
	items: ProductItem[];
};
