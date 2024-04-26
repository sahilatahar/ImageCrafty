import Link from "next/link"

const NotFound = () => {
	return (
		<div className="min-h-[80vh] w-full text-center gap-4 flex justify-center items-center flex-col">
			<h2 className="font-bold text-8xl">404</h2>
			<h4 className="text-2xl font-semibold">
				{`Oops! That page can't be found`}
			</h4>
			<p className="text-lg">
				{`The page you are looking for might have been removed or it doesn't exist`}
			</p>
			<Link
				href="/"
				className="inline-block bg-sand-700 text-white rounded-md mt-8 p-3 w-[200px]"
			>
				Go To Home
			</Link>
		</div>
	)
}

export default NotFound
