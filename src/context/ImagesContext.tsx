"use client"
import { createContext, useContext } from "react"
import { useState } from "react"

interface ImagesContextType {
	images: string[]
	generateImages: (prompt: string) => void
	removeImage: (image: string) => void
}

const ImagesContext = createContext<ImagesContextType>({
	images: [],
	generateImages: () => {},
	removeImage: () => {},
})

interface ImagesProviderProps {
	children: React.ReactNode
}

export const useImages = () => {
	return useContext(ImagesContext)
}

export const ImagesProvider: React.FC<ImagesProviderProps> = ({ children }) => {
	const [images, setImages] = useState<string[]>([])

	const generateImages = (prompt: string) => {
		const imageURL = `https://pollinations.ai/p/${prompt}`
		setImages((pre) => [...pre, imageURL])
	}

	const removeImage = (image: string) => {
		setImages((pre) => pre.filter((img) => img !== image))
	}

	return (
		<ImagesContext.Provider value={{ images, generateImages, removeImage }}>
			{children}
		</ImagesContext.Provider>
	)
}
