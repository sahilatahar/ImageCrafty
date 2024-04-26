"use client"
import { useImages } from "@/context/ImagesContext"
import { useState } from "react"

export default function Header() {
	const [prompt, setPrompt] = useState("")
	const { generateImages } = useImages()

	const handleGenerate = () => {
		generateImages(prompt)
	}

	return (
		<header className="flex items-center justify-center gap-4 flex-col py-14">
			<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sand-900">
				ImageCrafty
			</h1>
			<p className="text-center">
				Discover Your Artistic Side with Free AI Image Generation.
			</p>
			<div className="flex gap-2 w-full pt-4 flex-col sm:flex-row justify-center">
				<input
					type="text"
					placeholder="Enter your prompt here..."
					className="border border-sand-300 rounded-md p-3 md:w-1/2 w-full"
					value={prompt}
					onChange={(e) => setPrompt(e.target.value)}
				/>
				<button
					className="bg-sand-700 text-white rounded-md p-3 w-full sm:w-[200px]"
					onClick={handleGenerate}
				>
					Generate
				</button>
			</div>
		</header>
	)
}
