import { Categories } from "./components";
import { PageHeader, PageNavigation, PageFooter } from "./layouts";
import { sneakersProductsMaster } from "./data";
import { Products } from "./components";

function App() {
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
				<Products product={sneakersProductsMaster} />
			</main>
			<PageNavigation />
			<PageFooter />
		</>
	);
}

export default App;
