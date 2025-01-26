import { useState } from "react";

export const useFavorite = (favorites: string[]) => {
	const [favoritesProduct, setFavoritesProduct] = useState(favorites);

	const updateFavorite = (productCode: string) => {
		setFavoritesProduct((prev) => [...prev, productCode]);
	};

	const removeFavorite = (productCode: string) => {
		setFavoritesProduct((prev) => prev.filter((code) => code !== productCode));
	};

	return { favoritesProduct, updateFavorite, removeFavorite };
};
