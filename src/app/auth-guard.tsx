import { Navigate, Outlet } from 'react-router-dom'
import { APP_ROUTES } from '../common/consts'
import { useAuth } from '../common/hooks/use-auth'

export function AuthGuard() {
	const { isAuth } = useAuth()

	return isAuth ? <Outlet /> : <Navigate to={APP_ROUTES.SIGN_IN} replace />
}
