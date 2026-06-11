import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export default function AboutHeader() {
	return (
		<section className="py-12">
			<h1 className="text-6xl font-bold text-white mb-8">About Me</h1>
			<div className="flex gap-4">
				<Button size="lg" asChild>
					<Link to="/contact">Get In Touch</Link>
				</Button>
				<Button size="lg" variant="outline" asChild>
					<Link to="/">View Projects</Link>
				</Button>
			</div>
		</section>
	);
}
