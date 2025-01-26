import { ChevronDown } from "lucide-react";
import { Menu } from "../types";

type Props = {
	header: string;
	menus: Menu[];
};

export const FooterMenusSP = ({ header, menus }: Props) => {
	return (
		<details className="group space-y-4">
			<summary className="flex list-none items-center justify-between">
				<span className="text-sm font-bold">{header}</span>
				<ChevronDown className="stroke-1 group-open:rotate-180" />
			</summary>
			<ul className="space-y-1">
				{menus.map((menu, index) => (
					<li key={index}>
						<a
							href={menu.path}
							className="text-sm hover:text-gray-400 hover:underline"
						>
							{menu.label}
						</a>
					</li>
				))}
			</ul>
		</details>
	);
};
