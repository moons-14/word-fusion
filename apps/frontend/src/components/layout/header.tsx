import { Settings, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export const Header = () => {
	return (
		<header className="h-12 border-b border-border flex items-center justify-between p-4 container mx-auto px-4">
			<h1 className="font-bold text-xl">
				<Link href="/">Word Fusion</Link>
			</h1>
			<div className="flex items-center gap-2">
				<Link href="/settings">
					<Button variant="ghost" size="icon">
						<Settings />
					</Button>
				</Link>
				<a href="https://x.com/moons_dev" target="_blank" rel="noreferrer">
					<Button variant="ghost" size="icon">
						<Twitter />
					</Button>
				</a>
			</div>
		</header>
	);
};
