import { useRouteError } from "react-router-dom"

export function NotFound404() {
	console.log(useRouteError());
	return <div>404 bruh</div>
}