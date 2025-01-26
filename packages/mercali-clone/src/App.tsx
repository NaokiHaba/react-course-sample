import { navigationMenus } from "./constant";

function App() {
	return (
		<>
			<div className="min-h-screen" />
			<nav className="sticky bottom-0 z-10 border-t border-secondary-border bg-white lg:hidden">
				<ul className="grid grid-cols-4">
					{navigationMenus.map((menu) => (
						<li key={menu.label}>
							<a
								href={menu.path}
								className="flex flex-col items-center justify-center gap-1 py-1.5 text-xs hover:bg-secondary-hover"
							>
								<menu.icon className="size-[24px] stroke-2" />
								<span className="text-xs">{menu.label}</span>
							</a>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
}

export default App;
