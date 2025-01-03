import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

export default function Home() {
	return (
		<>
			<Navbar />
			<div className="relative m-4 min-h-screen">
				<header className="card container mx-auto flex w-full items-center justify-between">
					<div className="container mx-auto flex items-center justify-between">
						<h1 className="font-semibold">Hello World!</h1>
					</div>
				</header>

				<hr className="my-6 w-full" />

				<main className="container mx-auto my-4 flex flex-col items-start justify-center">
					<p className="text-base font-normal text-muted-foreground">
						This is a demo of my{" "}
						<a href="https://github.com/matimortari/vite-boilerplate" className="font-semibold text-foreground">
							Vite boilerplate{" "}
						</a>
						for building a full-stack web application using Vite, TypeScript, Tailwind CSS, and more. It includes:
					</p>

					<ul className="mt-4 list-inside list-disc text-base font-normal text-muted-foreground">
						<li>
							<strong>Vite</strong> with <strong>React</strong>.
						</li>
						<li>
							<strong>TypeScript</strong>.
						</li>
						<li>
							<strong>Tailwind CSS</strong>.
						</li>
						<li>
							<strong>Express.js</strong> for API routing.
						</li>
						<li>
							<strong>PostgreSQL</strong> & <strong>pg</strong> for database management.
						</li>
						<li>
							<strong>Vitest</strong> for unit & integration testing.
						</li>
						<li>
							<strong>Playwright</strong> for end-to-end testing.
						</li>
					</ul>
				</main>
			</div>
			<Footer />
		</>
	)
}
