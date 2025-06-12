import { Outlet } from 'react-router-dom'

export function AuthGuard() {
	// if () {
	// 	return <Navigate to={APP_ROUTES.SIGN_IN} replace />
	// }

	return <Outlet />
}
