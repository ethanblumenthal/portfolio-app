import FadeInAnimation from "@/components/FadeInAnimation";
import FeaturedProjects from "@/components/FeaturedProjects";
import MainHero from "@/components/MainHero";

export default function HomePage() {
	return (
		<div className="space-y-20">
			<FadeInAnimation>
				<MainHero />
			</FadeInAnimation>
			<FadeInAnimation delay={0.4}>
				<FeaturedProjects />
			</FadeInAnimation>
		</div>
	);
}
