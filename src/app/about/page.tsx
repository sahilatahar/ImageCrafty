function About() {
	return (
		<div className="px-4 py-7">
			<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-sand-900 text-center py-7">
				About
			</h1>
			<p>
				ImageCrafty is a project created for practicing Next.js skills
				while integrating an image generation API. It is a simple yet
				effective platform built with Next.js and Tailwind CSS, aimed at
				providing users with an easy way to generate dynamic images on
				the fly.
			</p>
			<h3 className="pt-10 pb-3 text-2xl font-semibold">Features</h3>
			<ol className="flex flex-col gap-1 list-decimal list-inside">
				<li>Generate dynamic images using the Image Generator API.</li>
				<li>
					Built with Next.js for server-side rendering and React for
					front-end interactivity.
				</li>
				<li>Styled with Tailwind CSS for rapid UI development.</li>
			</ol>
			<h2 className="pt-10 pb-3 text-2xl font-semibold">
				About the Developer
			</h2>
			<p>
				ImageCrafty is developed by{" "}
				<a
					href="https://github.com/sahilatahar"
					className="font-semibold hover:underline"
				>
					Sahil Atahar
				</a>
				, a passionate developer dedicated to honing their skills and
				exploring new technologies.
			</p>
			<h2 className="pt-10 pb-3 text-2xl font-semibold">Credit</h2>
			<p>
				ImageCrafty utilizes the Image Generator API provided by{" "}
				<a
					href="https://pollinations.ai/"
					className="font-semibold hover:underline"
				>
					Pollinations AI
				</a>
				.
			</p>
		</div>
	)
}

export default About
