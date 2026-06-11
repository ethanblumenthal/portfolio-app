import { Link } from "@tanstack/react-router";
import NavbarDesktop from "@/components/NavbarDesktop";
import NavbarMobile from "@/components/NavbarMobile";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex min-h-screen bg-background font-sans antialiased">
			<NavbarDesktop />
			<main className="flex-1 md:pl-[250px]">
				<div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-background border-b border-gray-800 p-4">
					<div className="flex justify-between items-center">
						<NavbarMobile />
						<Link
							to="/"
							className="text-xl font-semibold hover:text-primary transition-colors"
						>
							Ethan Blumenthal
						</Link>
					</div>
				</div>
				<div className="container mx-auto px-4 py-8 mt-16 md:mt-0">
					{children}
				</div>
			</main>
		</div>
	);
}
