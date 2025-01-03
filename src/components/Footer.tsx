import { Icon } from "@iconify/react"

export default function Footer() {
	return (
		<footer className="flex flex-col items-center justify-between md:flex-row">
			<div className="m-2 font-light text-muted-foreground">
				<p>© 2025 Matheus Mortari. All rights reserved.</p>
			</div>

			<div className="m-4 flex flex-row gap-4 text-muted-foreground">
				<a href="https://github.com/matimortari" target="_blank" rel="noopener noreferrer">
					<Icon icon="simple-icons:github" className="icon size-6" />
				</a>
				<a href="https://www.linkedin.com/in/matheus-mortari-19rt" target="_blank" rel="noopener noreferrer">
					<Icon icon="simple-icons:linkedin" className="icon size-6" />
				</a>
			</div>
		</footer>
	)
}
