import { Menu } from "../types";

type Props = {
	header: string;
	menus: Menu[];
};

export const FooterMenus = ({ header, menus }: Props) => {
	return (
		<div className="space-y-3">
			<p className="font-bold">{header}</p>
			<ul className="space-y-1">
				{menus.map((menu, index) => (
					<li key={index}>
						<a href={menu.path} className="hover:text-gray-400 hover:underline">
							{menu.label}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};
