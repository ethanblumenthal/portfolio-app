import {
	createRootRoute,
	createRoute,
	createRouter,
	Outlet,
	RouterProvider,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import RootLayout from "@/components/RootLayout";

import * as TanStackQueryProvider from "@/lib/root-provider.tsx";

import "./styles.css";
import AboutPage from "@/routes/AboutPage";
import ContactPage from "@/routes/ContactPage";
// Page imports
import HomePage from "@/routes/HomePage";
import ProjectDetailsPage from "@/routes/ProjectDetailsPage";
import ProjectsPage from "@/routes/ProjectsPage";
import reportWebVitals from "./reportWebVitals.ts";

const rootRoute = createRootRoute({
	component: () => (
		<RootLayout>
			<Outlet />
			<TanStackRouterDevtools />
		</RootLayout>
	),
});

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: HomePage,
});

const aboutRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/about",
	component: AboutPage,
});

const contactRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/contact",
	component: ContactPage,
});

const projectsRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/projects",
	component: ProjectsPage,
});

const projectDetailsRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/projects/$slug",
	component: ProjectDetailsPage,
});

const routeTree = rootRoute.addChildren([
	indexRoute,
	aboutRoute,
	contactRoute,
	projectsRoute,
	projectDetailsRoute,
]);

const TanStackQueryProviderContext = TanStackQueryProvider.getContext();
const router = createRouter({
	routeTree,
	context: {
		...TanStackQueryProviderContext,
	},
	defaultPreload: "intent",
	scrollRestoration: true,
	defaultStructuralSharing: true,
	defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<TanStackQueryProvider.Provider {...TanStackQueryProviderContext}>
				<RouterProvider router={router} />
			</TanStackQueryProvider.Provider>
		</StrictMode>,
	);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
