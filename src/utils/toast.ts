import { toast } from "react-hot-toast"

interface ToastProps {
	type: "success" | "error" | "loading" | undefined
	message: string
}

export const showToast = ({ type, message }: ToastProps) => {
	dismissToast()
	switch (type) {
		case "success":
			toast.success(message)
			break
		case "error":
			toast.error(message)
			break
		case "loading":
			toast.loading(message)
			break
		default:
			toast(message)
			break
	}
}

export const dismissToast = () => {
	toast.dismiss()
}
