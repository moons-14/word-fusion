import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dices, X } from "lucide-react";

export default function Home() {
	return (
		<>
			<div className="flex justify-center items-center min-h-[400px] h-[50dvh] bg-gradient-radial">
				<div className="">
					<div className="flex justify-center">
						<button
							type="button"
							className="backdrop-blur-xl justify-center space-y-2"
						>
							<Dices className="mx-auto" size={100} />
							<div className="text-lg font-semibold">Random Dice</div>
						</button>
					</div>
					<div className="mt-8 flex items-center">
						<Input value="Apple" className="bg-background" />
						<div>
							<X className="mx-2" size={24} />
						</div>
						<Input value="Apple" className="bg-background" />
						<div>
							<X className="mx-2" size={24} />
						</div>
						<Input value="Apple" className="bg-background" />
					</div>
					<div className="w-full flex justify-center mt-8">
						<Button variant="default" size="lg">
							fantasize
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
