import Header from "@/components/Header"
import ImageGrid from "@/components/ImageGrid"
import { ImagesProvider } from "@/context/ImagesContext"
import { Toaster } from "react-hot-toast"

export default function Home() {
	return (
		<ImagesProvider>
			<main>
				<Header />
				<ImageGrid />
			</main>
			<Toaster position="top-right" />
		</ImagesProvider>
	)
}
