import { Categories } from "./components";
import { PageHeader, PageNavigation, PageFooter } from "./layouts";
import { earringsProductsMaster, sneakersProductsMaster } from "./data";
import { Products } from "./components";
import { favorites } from "./data/favorites";
import { useFavorite } from "./hooks";

function App() {
	const { favoritesProduct, updateFavorite, removeFavorite } =
		useFavorite(favorites);

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
					updateFavorite={updateFavorite}
					removeFavorite={removeFavorite}
				/>
				<Products
					product={earringsProductsMaster}
					favoritesProduct={favoritesProduct}
					updateFavorite={updateFavorite}
					removeFavorite={removeFavorite}
				/>
			</main>
			<PageNavigation />
			<PageFooter />
		</>
	);
}

export default App;
