import { Categories } from "./components";
import { PageHeader, PageNavigation } from "./layouts";

function App() {
	return (
		<>
			<div className="sticky top-0 z-10 bg-white">
				<PageHeader />
				<Categories />
			</div>
			<div className="min-h-screen" />
			<PageNavigation />
		</>
	);
}

export default App;
