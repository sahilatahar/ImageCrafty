import Link from "next/link"

export default function Navbar() {
	return (
		<nav className="sticky top-0 left-0 py-3 md:py-4 flex justify-between items-center bg-bgLight z-10 px-2 md:px-4">
			<h1 className="text-2xl font-bold">ImageCrafty</h1>

			<ul className="flex text-lg sm:gap-8">
				<li className="hover:font-semibold w-16">
					<Link href="/">Home</Link>
				</li>
				<li className="hover:font-semibold w-16">
					<Link href="/about">About</Link>
				</li>
			</ul>
		</nav>
	)
}
