import { useState } from "react";
import { Categories } from "./components";
import { PageHeader, PageNavigation, PageFooter } from "./layouts";
import { earringsProductsMaster, sneakersProductsMaster } from "./data";
import { Products } from "./components";
import { favorites } from "./data/favorites";

function App() {
	const [favoritesProduct, setFavoritesProduct] = useState(favorites);

	const handleAddFavorite = (productCode: string) => {
		setFavoritesProduct((prev) => [...prev, productCode]);
	};

	const handleRemoveFavorite = (productCode: string) => {
		setFavoritesProduct((prev) => prev.filter((code) => code !== productCode));
	};

	return (
		<>
			<div className="sticky top-0 z-10 bg-white">
				<PageHeader />
				<Categories />
			</div>
			<main className="container mx-auto max-w-screen-xl p-5 lg:p-10">
				<h2 className="pb-5 text-lg font-bold text-secondary-text lg:text-xl">
					閲覧した商品からのおすすめ
				</h2>
				<Products
					product={sneakersProductsMaster}
					favoritesProduct={favoritesProduct}
					handleAddFavorite={handleAddFavorite}
					handleRemoveFavorite={handleRemoveFavorite}
				/>
				<Products
					product={earringsProductsMaster}
					favoritesProduct={favoritesProduct}
					handleAddFavorite={handleAddFavorite}
					handleRemoveFavorite={handleRemoveFavorite}
				/>
			</main>
			<PageNavigation />
			<PageFooter />
		</>
	);
}

export default App;
