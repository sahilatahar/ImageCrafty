import Link from "next/link"

export default function Navbar() {
	return (
		<nav className="sticky top-0 left-0 md:py-4 flex justify-between items-center bg-bgLight">
			<h1 className="text-2xl font-bold">ImageGenius</h1>

			<ul className="flex text-lg">
				<li className="hover:bg-sand-100 py-1 px-6 rounded-md">
					<Link href="/">Home</Link>
				</li>
				<li className="hover:bg-sand-100 py-1 px-6 rounded-md">
					<Link href="/about">About</Link>
				</li>
			</ul>
		</nav>
	)
}
