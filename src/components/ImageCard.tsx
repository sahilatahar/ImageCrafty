"use client"
import { useState } from "react"
import Image from "next/image"
import { useImages } from "@/context/ImagesContext"
import { IoClose } from "react-icons/io5"

interface ImageCardProp {
	src: string
}

function ImageCard({ src }: ImageCardProp) {
	const [isLoading, setIsLoading] = useState(true)
	const { removeImage } = useImages()

	const onImageLoad = () => {
		setIsLoading(false)
	}

	const handleRemove = () => {
		removeImage(src)
	}

	return (
		<div className="w-full border border-sand-700 rounded-md relative group">
			{!isLoading && (
				<button
					className="rounded-full w-8 h-8 bg-sand-700 flex sm:hidden justify-center items-center text-white absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 group-hover:flex text-2xl"
					onClick={handleRemove}
				>
					<IoClose size={26} />
				</button>
			)}
			{isLoading && (
				<div className="flex items-center justify-center bg-gray-200 w-full aspect-square animate-pulse rounded-md absolute top-0 left-0 z-10">
					<svg
						viewBox="0 0 16 20"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						className="w-10 h-10 text-gray-200 dark:text-gray-600"
					>
						<path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"></path>
						<path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"></path>
					</svg>
				</div>
			)}
			<Image
				src={src}
				alt="Image"
				width={100}
				height={100}
				loader={({ src }) => src}
				className="rounded-t-md w-full"
				onLoad={onImageLoad}
				unoptimized
			/>
			<a
				className="bg-sand-700 text-white rounded-b-md p-3 w-full inline-block text-center font-semibold"
				href={src}
				download="image.jpg"
				target="_blank"
				rel="noreferrer"
			>
				Download
			</a>
		</div>
	)
}

export default ImageCard
