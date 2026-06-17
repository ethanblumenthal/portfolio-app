import { Link } from "@tanstack/react-router";
import { Bitcoin, Brain, Code, Database, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MainHero() {
	return (
		<section className="relative py-16 md:py-24">
			<div className="relative space-y-8">
				{/* Status badge */}
				<div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary ring-1 ring-inset ring-primary/30 backdrop-blur-sm">
					<span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
					Available for Coffee
				</div>

				{/* Main hero content */}
				<div className="space-y-6">
					<div className="space-y-2">
						<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
							<span className="text-white">Hi, I&apos;m </span>
							<span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
								Ethan
							</span>
						</h1>
						<h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-300 tracking-tight">
							Product engineer -
							<span className="text-white"> always shipping</span>
						</h2>
					</div>

					<p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
						Driving Bitcoin adoption through innovative FinTech products. 7
						years of engineering experience with emerging technologies.
					</p>
				</div>

				{/* Key focus areas */}
				<div className="flex flex-wrap gap-3">
					<div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-dark-secondary border border-white/10">
						<Code className="h-4 w-4 text-primary" />
						<span className="text-sm text-gray-300 font-medium">Frontend</span>
					</div>
					<div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-dark-secondary border border-white/10">
						<Server className="h-4 w-4 text-primary" />
						<span className="text-sm text-gray-300 font-medium">Backend</span>
					</div>
					<div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-dark-secondary border border-white/10">
						<Database className="h-4 w-4 text-primary" />
						<span className="text-sm text-gray-300 font-medium">DevOps</span>
					</div>
					<div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-dark-secondary border border-white/10">
						<Brain className="h-4 w-4 text-primary" />
						<span className="text-sm text-gray-300 font-medium">AI Agents</span>
					</div>
					<div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-dark-secondary border border-white/10">
						<Bitcoin className="h-4 w-4 text-primary" />
						<span className="text-sm text-gray-300 font-medium">Bitcoin</span>
					</div>
				</div>

				{/* CTA buttons */}
				<div className="flex flex-col sm:flex-row gap-4 pt-6">
					<Button size="lg" asChild>
						<Link to="/contact">Get In Touch</Link>
					</Button>
					<Button size="lg" variant="outline" asChild>
						<Link to="/about">Learn More</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
