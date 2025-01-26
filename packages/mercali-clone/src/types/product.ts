export type Product = {
	name: string;
	category: {
		id: number;
		name: string;
	};
	items: {
		code: string;
		name: string;
		price: number;
		imageUrl: string;
	}[];
};
