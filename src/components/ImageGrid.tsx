"use client"
import { useImages } from "@/context/ImagesContext"
import ImageCard from "./ImageCard"

const ImageGrid = () => {
	const { images } = useImages()

	return (
		<div className="image-grid p-4 md:p-8 pb-7">
			{images
				?.map((image, index) => <ImageCard key={index} src={image} />)
				.reverse()}
		</div>
	)
}

export default ImageGrid
