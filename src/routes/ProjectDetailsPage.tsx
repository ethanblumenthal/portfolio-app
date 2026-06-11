import { useNavigate, useParams } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import FadeInAnimation from "@/components/FadeInAnimation";
import ProjectMetadata from "@/components/projects/ProjectMetadata";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/lib/constants";

export default function ProjectPage() {
	const params = useParams({ strict: false });
	const navigate = useNavigate();
	const project = PROJECTS.find((project) => project.slug === params.slug);

	if (!project) {
		return <div>Project not found</div>;
	}

	return (
		<div className="space-y-8">
			<FadeInAnimation>
				<div className="flex justify-between items-center">
					<Button
						variant="outline"
						className="border-gray-800"
						onClick={() => {
							navigate({ to: ".." });
						}}
					>
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back
					</Button>
					<Button variant="outline" className="border-gray-800" asChild>
						<a
							href={project.previewUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							Go To App
							<ArrowRight className="ml-2 h-4 w-4" />
						</a>
					</Button>
				</div>
			</FadeInAnimation>

			<FadeInAnimation delay={0.2}>
				<div className="space-y-6">
					<h1 className="text-5xl font-bold text-white">{project.title}</h1>
					<p className="text-xl text-gray-400 leading-relaxed">
						{project.description}
					</p>
				</div>
			</FadeInAnimation>

			<FadeInAnimation delay={0.4}>
				<ProjectMetadata
					year={project.year}
					position={project.position}
					tagline={project.tagline}
					location={project.location}
				/>
			</FadeInAnimation>

			{project?.mobileImages && project?.mobileImages.length > 0 && (
				<FadeInAnimation delay={0.6}>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						{project?.mobileImages.map((image, index) => (
							<div key={image} className="relative h-[600px]">
								<img
									src={image}
									alt={`${project.title} screenshot ${index + 1}`}
									className="w-full h-full object-contain rounded-lg"
								/>
							</div>
						))}
					</div>
				</FadeInAnimation>
			)}

			{project?.desktopImages && project?.desktopImages.length > 0 && (
				<FadeInAnimation delay={0.6}>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{project?.desktopImages.map((image, index) => (
							<div key={image} className="relative h-[280px] md:h-[400px]">
								<img
									src={image}
									alt={`${project.title} screenshot ${index + 1}`}
									className="w-full h-full object-contain rounded-lg"
								/>
							</div>
						))}
					</div>
				</FadeInAnimation>
			)}
		</div>
	);
}
